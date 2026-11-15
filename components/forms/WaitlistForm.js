'use client'

import { useId } from 'react'
import NetlifyForm, { useNetlifyForm } from '@/components/forms/NetlifyForm'
import Button from '@/components/ui/Button'
import siteConfig from '@/site.config'

export const WAITLIST_FORM = 'waitlist'

/**
 * The email-only waitlist form (no health information, ever): input and
 * button on one white pill. Sized for 44px touch targets.
 */
export default function WaitlistForm() {
  const { status, handleSubmit } = useNetlifyForm()
  const errorId = useId()
  const emailId = useId()

  if (status === 'sent') {
    return (
      <p
        role="status"
        className="rounded-pill bg-white px-6 py-3.5 text-[16px] font-bold text-teal"
      >
        You are on the list.
      </p>
    )
  }

  return (
    <NetlifyForm
      name={WAITLIST_FORM}
      onSubmit={handleSubmit}
      aria-describedby={status === 'error' ? errorId : undefined}
    >
      <div className="flex gap-2 rounded-pill bg-white p-1.5">
        <label htmlFor={emailId} className="sr-only">
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
          className="min-w-0 flex-[1_1_140px] rounded-pill bg-white px-4 py-3 text-[16px] text-text focus-ring placeholder:text-text-faint"
        />
        <Button
          type="submit"
          variant="accent"
          size={null}
          disabled={status === 'sending'}
          className="px-5 py-3 text-[16px]"
        >
          {status === 'sending' ? 'Sending…' : 'Notify me'}
        </Button>
      </div>
      {status === 'error' ? (
        <p id={errorId} role="alert" className="mt-3 text-[15px] leading-normal font-semibold">
          Something went wrong. Please email{' '}
          <a href={`mailto:${siteConfig.contact.email}`} className="underline">
            {siteConfig.contact.email}
          </a>{' '}
          instead.
        </p>
      ) : null}
    </NetlifyForm>
  )
}
