'use client'

import { useId } from 'react'
import NetlifyForm, { useNetlifyForm } from '@/components/forms/NetlifyForm'
import Button from '@/components/ui/Button'
import siteConfig from '@/site.config'

const field =
  'w-full rounded-card-small border border-line bg-white px-4 py-3 text-[16px] text-text placeholder:text-text-faint focus-ring'
const label = 'text-[15px] font-semibold text-navy'

/**
 * General enquiries once the center is open (Netlify form `contact`).
 * Name, email, optional phone and a message: no health information.
 */
export default function ContactForm() {
  const { status, handleSubmit } = useNetlifyForm()
  const id = useId()

  if (status === 'sent') {
    return (
      <p role="status" className="rounded-card bg-mint p-5 font-semibold text-navy">
        Thank you. We will reply by email soon.
      </p>
    )
  }

  return (
    <NetlifyForm name="contact" onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <p className="flex flex-col gap-1.5">
          <label htmlFor={`${id}-name`} className={label}>
            Name
          </label>
          <input id={`${id}-name`} name="name" required autoComplete="name" className={field} />
        </p>
        <p className="flex flex-col gap-1.5">
          <label htmlFor={`${id}-email`} className={label}>
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </p>
      </div>
      <p className="flex flex-col gap-1.5">
        <label htmlFor={`${id}-phone`} className={label}>
          Phone <span className="font-normal text-text-faint">(optional)</span>
        </label>
        <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" className={field} />
      </p>
      <p className="flex flex-col gap-1.5">
        <label htmlFor={`${id}-message`} className={label}>
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={5}
          maxLength={1000}
          aria-describedby={`${id}-note`}
          className={field}
        />
      </p>
      <p id={`${id}-note`} className="text-[14px] text-text-faint">
        Please do not include health information. We will collect what we need securely later.
      </p>
      {status === 'error' ? (
        <p role="alert" className="font-semibold text-navy">
          Something went wrong. Please email{' '}
          <a href={`mailto:${siteConfig.contact.email}`} className="underline">
            {siteConfig.contact.email}
          </a>{' '}
          instead.
        </p>
      ) : null}
      <Button type="submit" disabled={status === 'sending'} className="self-start">
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </Button>
    </NetlifyForm>
  )
}
