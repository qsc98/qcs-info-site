'use client'

import { useId } from 'react'
import NetlifyForm, { useNetlifyForm } from '@/components/forms/NetlifyForm'
import Button from '@/components/ui/Button'
import cx from '@/lib/cx'
import siteConfig from '@/site.config'

export const WAITLIST_FORM = 'waitlist'

/*
 * Two layouts of the same email-only form (no health information, ever):
 * - panel: the teal "Be first to know" panel (design/README.md §3.7);
 *   stacked with a visible label on phones, one white pill on desktop.
 * - strip: the footer "Get the one opening email" strip (§3.8).
 */
const layouts = {
  panel: {
    row: 'flex flex-col gap-3 md:flex-row md:gap-2.5 md:rounded-pill md:bg-white md:p-2',
    label: 'mt-1 text-[15px] font-semibold text-white md:sr-only',
    input:
      'rounded-pill bg-white px-4 py-[15px] text-[17px] focus-ring-inverse md:flex-[1_1_200px] md:px-[18px] md:py-3.5 md:focus-ring',
    button: {
      variant: 'primary',
      size: null,
      ring: 'focus-ring-inverse md:focus-ring',
      className: 'p-[17px] text-[17px] md:px-6 md:py-3.5 md:text-[16px]',
    },
    sent: 'py-4 text-[17px]',
  },
  strip: {
    row: 'flex gap-2 rounded-pill bg-white p-1.5',
    label: 'sr-only',
    input: 'flex-[1_1_140px] rounded-pill bg-white px-3.5 py-2.5 text-[15px] focus-ring',
    button: {
      variant: 'accent',
      size: null,
      className: 'px-[18px] py-2.5 text-[15px]',
    },
    sent: 'py-3 text-[15px]',
  },
}

export default function WaitlistForm({ layout = 'panel' }) {
  const { status, handleSubmit } = useNetlifyForm()
  const errorId = useId()
  const emailId = useId()
  const l = layouts[layout]

  if (status === 'sent') {
    return (
      <p role="status" className={cx('rounded-pill bg-white px-6 font-bold text-teal', l.sent)}>
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
      <div className={l.row}>
        <label htmlFor={emailId} className={l.label}>
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
          className={cx('min-w-0 text-text placeholder:text-text-faint', l.input)}
        />
        <Button type="submit" disabled={status === 'sending'} {...l.button}>
          {status === 'sending' ? 'Sending…' : 'Notify me'}
        </Button>
      </div>
      {status === 'error' ? (
        <p
          id={errorId}
          role="alert"
          className="mt-3 text-[15px] leading-normal font-semibold text-white"
        >
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
