'use client'

import { useId, useState } from 'react'
import siteConfig from '../site.config'

const FORM_NAME = 'waitlist'

/**
 * Pre-launch interest form. Posts to Netlify Forms (detected from the static
 * HTML at deploy time). Collects name + email only — no health information.
 *
 * Variants:
 * - 'default' / compact: the stacked card form used on the contact page.
 * - 'panel': the home page "Be first to know" teal panel (§3.7).
 * - 'strip': the footer "Get the one opening email" strip (§3.8).
 * All variants are the same Netlify form (`waitlist`) with the hidden
 * form-name and the honeypot.
 */
export default function WaitlistForm({ compact = false, variant = 'default' }) {
  const [state, setState] = useState('idle') // idle | sending | sent | error
  const uid = useId()
  const emailId = `${uid}-email`
  const nameId = `${uid}-name`
  const noteId = `${uid}-note`

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

  const netlifyFields = (
    <>
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
    </>
  )

  if (variant === 'panel' || variant === 'strip') {
    const panel = variant === 'panel'
    if (state === 'sent') {
      return (
        <p
          role="status"
          className={`rounded-pill bg-white px-6 font-bold text-teal ${panel ? 'py-4 text-[17px]' : 'py-3 text-[15px]'}`}
        >
          You are on the list.
        </p>
      )
    }
    const sending = state === 'sending'
    return (
      <form
        name={FORM_NAME}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={onSubmit}
        aria-describedby={state === 'error' ? noteId : undefined}
      >
        {netlifyFields}
        <div
          className={
            panel
              ? 'flex flex-col gap-3 md:flex-row md:gap-2.5 md:rounded-pill md:bg-white md:p-2'
              : 'flex gap-2 rounded-pill bg-white p-1.5'
          }
        >
          <label
            htmlFor={emailId}
            className={panel ? 'mt-1 text-[15px] font-semibold text-white md:sr-only' : 'sr-only'}
          >
            Email address
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            className={
              panel
                ? 'min-w-0 rounded-pill border-0 bg-white px-4 py-[15px] text-[17px] text-text placeholder:text-text-faint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:flex-[1_1_200px] md:px-[18px] md:py-3.5 md:focus-visible:outline-teal'
                : 'min-w-0 flex-[1_1_140px] rounded-pill border-0 bg-white px-3.5 py-2.5 text-[15px] text-text placeholder:text-text-faint focus-visible:outline-2 focus-visible:outline-teal'
            }
          />
          <button
            type="submit"
            disabled={sending}
            className={
              panel
                ? 'rounded-pill bg-navy p-[17px] text-[17px] font-bold text-white hover:bg-[#143b58] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-60 md:px-6 md:py-3.5 md:text-[16px] md:focus-visible:outline-navy'
                : 'rounded-pill bg-teal px-[18px] py-2.5 text-[15px] font-bold text-white hover:bg-teal-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal disabled:opacity-60'
            }
          >
            {sending ? 'Sending…' : 'Notify me'}
          </button>
        </div>
        {state === 'error' ? (
          <p id={noteId} role="alert" className="mt-3 text-[15px] leading-normal font-semibold text-white">
            Something went wrong. Please email{' '}
            <a href={`mailto:${siteConfig.contact.email}`} className="underline">
              {siteConfig.contact.email}
            </a>{' '}
            instead.
          </p>
        ) : null}
      </form>
    )
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
      aria-describedby={noteId}
    >
      {netlifyFields}

      <div>
        <label htmlFor={nameId} className="block text-base font-medium text-slate-800">
          Your name <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          className="mt-1 w-full rounded-xl border border-slate-400 bg-white px-4 py-3 text-base text-slate-900 focus:border-teal focus:ring-2 focus:ring-teal/40 focus:outline-hidden"
        />
      </div>

      <div>
        <label htmlFor={emailId} className="block text-base font-medium text-slate-800">
          Email address
        </label>
        <input
          id={emailId}
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

      <p id={noteId} className="text-sm text-slate-600">
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
