'use client'

import { useState } from 'react'

const HONEYPOT = 'bot-field'

/**
 * Submission state for a <NetlifyForm>. Posts the form URL-encoded to `/`,
 * which is what Netlify Forms expects from a static site.
 *
 * @returns {{ status: 'idle' | 'sending' | 'sent' | 'error', handleSubmit: (event) => void }}
 */
export function useNetlifyForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    if (data.get(HONEYPOT)) return
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return { status, handleSubmit }
}

/**
 * A <form> Netlify detects at deploy time: data-netlify, the hidden
 * form-name and a honeypot. Netlify registers fields from the static HTML,
 * so every form sharing a `name` should render the same field names.
 */
export default function NetlifyForm({ name, onSubmit, children, ...props }) {
  return (
    <form
      name={name}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot={HONEYPOT}
      onSubmit={onSubmit}
      {...props}
    >
      <input type="hidden" name="form-name" value={name} />
      <p hidden>
        <label>
          Don’t fill this out: <input name={HONEYPOT} tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      {children}
    </form>
  )
}
