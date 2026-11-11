import { useEffect, useEffectEvent } from 'react'

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'

function trapFocus(event, container) {
  const items = container.querySelectorAll(FOCUSABLE)
  if (!items.length) return
  const first = items[0]
  const last = items[items.length - 1]
  const active = document.activeElement
  if (!container.contains(active)) {
    event.preventDefault()
    first.focus()
  } else if (event.shiftKey && active === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && active === last) {
    event.preventDefault()
    first.focus()
  }
}

/**
 * Keyboard and scroll behaviour of a modal dialog while `open`: locks page
 * scroll, moves focus inside, keeps Tab inside, closes on Escape, and gives
 * focus back to whatever opened it.
 */
export default function useModalBehavior(open, { containerRef, initialFocusRef, onClose }) {
  const close = useEffectEvent(onClose)

  useEffect(() => {
    if (!open) return
    const opener = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    initialFocusRef.current?.focus()

    const onKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
      } else if (event.key === 'Tab' && containerRef.current) {
        trapFocus(event, containerRef.current)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus({ preventScroll: true })
    }
  }, [open, containerRef, initialFocusRef])
}
