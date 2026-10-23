'use client'

import { useState } from 'react'
import siteConfig from '../site.config'

const FORM_NAME = 'waitlist'

/**
 * Pre-launch interest form. Posts to Netlify Forms (detected from the static
 * HTML at deploy time). Collects name + email only — no health information.
 */
export default function WaitlistForm({ compact = false }) {
  const [state, setState] = useState('idle') // idle | sending | sent | error

  async function onSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    if (data.get('bot-field')) return
    setState('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setState('sent')
      form.reset()
    } catch {
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div
        role="status"
        className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-base text-emerald-900"
      >
        <p className="font-semibold">You’re on the list.</p>
        <p className="mt-1">We’ll email you as soon as we announce our opening date and enrollment steps.</p>
      </div>
    )
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className={compact ? 'space-y-3' : 'space-y-5'}
      aria-describedby="waitlist-note"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label htmlFor="waitlist-name" className="block text-base font-medium text-slate-800">
          Your name <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <input
          id="waitlist-name"
          name="name"
          type="text"
          autoComplete="name"
          className="mt-1 w-full rounded-xl border border-slate-400 bg-white px-4 py-3 text-base text-slate-900 focus:border-teal focus:ring-2 focus:ring-teal/40 focus:outline-hidden"
        />
      </div>

      <div>
        <label htmlFor="waitlist-email" className="block text-base font-medium text-slate-800">
          Email address
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          className="mt-1 w-full rounded-xl border border-slate-400 bg-white px-4 py-3 text-base text-slate-900 focus:border-teal focus:ring-2 focus:ring-teal/40 focus:outline-hidden"
        />
      </div>

      {!compact ? (
        <fieldset>
          <legend className="text-base font-medium text-slate-800">
            I am a… <span className="font-normal text-slate-500">(optional)</span>
          </legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {[
              ['family', 'Family member'],
              ['caregiver', 'Caregiver'],
              ['case-manager', 'Case manager / social worker'],
              ['other', 'Other'],
            ].map(([value, label]) => (
              <label
                key={value}
                className="flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-800"
              >
                <input type="radio" name="role" value={value} className="size-5 accent-teal" />
                {label}
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      <p id="waitlist-note" className="text-sm text-slate-600">
        We’ll only use your email to tell you when {siteConfig.name} opens. Please don’t include
        health information here.
      </p>

      {state === 'error' ? (
        <p role="alert" className="text-base font-medium text-red-700">
          Something went wrong. Please email{' '}
          <a href={`mailto:${siteConfig.contact.email}`} className="underline">
            {siteConfig.contact.email}
          </a>{' '}
          instead.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === 'sending'}
        className="w-full rounded-xl bg-teal px-6 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_rgba(17,103,104,0.3)] transition hover:bg-[#0d5556] focus:ring-2 focus:ring-teal/50 focus:outline-hidden disabled:opacity-60"
      >
        {state === 'sending' ? 'Sending…' : 'Notify me when you open'}
      </button>
    </form>
  )
}
