'use client'

import { useId } from 'react'
import NetlifyForm, { useNetlifyForm } from '@/components/forms/NetlifyForm'
import { WAITLIST_FORM } from '@/components/forms/WaitlistForm'
import siteConfig from '@/site.config'

const ROLES = [
  ['family', 'Family member'],
  ['caregiver', 'Caregiver'],
  ['case-manager', 'Case manager / social worker'],
  ['other', 'Other'],
]

const inputClasses =
  'mt-1 w-full rounded-xl border border-slate-400 bg-white px-4 py-3 text-base text-slate-900 focus:border-teal focus:ring-2 focus:ring-teal/40 focus:outline-hidden'

/**
 * The stacked waitlist card used on the contact page until it is redesigned.
 * Same Netlify form as components/forms/WaitlistForm, plus optional name
 * and role.
 */
export default function WaitlistCardForm() {
  const { status, handleSubmit } = useNetlifyForm()
  const nameId = useId()
  const emailId = useId()
  const noteId = useId()

  if (status === 'sent') {
    return (
      <div
        role="status"
        className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-base text-emerald-900"
      >
        <p className="font-semibold">You’re on the list.</p>
        <p className="mt-1">
          We’ll email you as soon as we announce our opening date and enrollment steps.
        </p>
      </div>
    )
  }

  return (
    <NetlifyForm
      name={WAITLIST_FORM}
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-describedby={noteId}
    >
      <div>
        <label htmlFor={nameId} className="block text-base font-medium text-slate-800">
          Your name <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <input id={nameId} name="name" type="text" autoComplete="name" className={inputClasses} />
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
          className={inputClasses}
        />
      </div>

      <fieldset>
        <legend className="text-base font-medium text-slate-800">
          I am a… <span className="font-normal text-slate-500">(optional)</span>
        </legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {ROLES.map(([value, label]) => (
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

      <p id={noteId} className="text-sm text-slate-600">
        We’ll only use your email to tell you when {siteConfig.name} opens. Please don’t include
        health information here.
      </p>

      {status === 'error' ? (
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
        disabled={status === 'sending'}
        className="w-full rounded-xl bg-teal px-6 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_rgba(17,103,104,0.3)] transition hover:bg-teal-hover focus:ring-2 focus:ring-teal/50 focus:outline-hidden disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Notify me when you open'}
      </button>
    </NetlifyForm>
  )
}
