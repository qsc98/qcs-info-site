'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Icon from '@/components/ui/Icon'
import SmartLink from '@/components/ui/SmartLink'
import cx from '@/lib/cx'
import { serviceLinks } from '@/lib/navigation'

const tones = {
  // Navy text on the white compact bar.
  default: 'text-navy focus-ring hover:text-teal',
  // White text on the hero image (notch nav).
  inverse: 'text-white focus-ring-inverse hover:text-mint-strong',
}

/**
 * The header's "Services" item (desktop): a disclosure that opens a white
 * panel with the home overview and the four service pages, like the live
 * site's dropdown. Closes on Escape, on a click outside, when focus leaves
 * and when a link is chosen. `overviewHref` is the services section on `/`.
 */
export default function ServicesMenu({ overviewHref, tone = 'default' }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const buttonRef = useRef(null)
  const panelId = useId()

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }
    const onKey = (event) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      buttonRef.current?.focus()
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const onBlur = (event) => {
    if (!rootRef.current?.contains(event.relatedTarget)) setOpen(false)
  }

  const items = [
    { label: 'All four services', note: 'An overview on the home page', href: overviewHref },
    ...serviceLinks,
  ]

  return (
    <div ref={rootRef} onBlur={onBlur} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className={cx(
          'flex items-center gap-1 rounded py-2.5 text-[16px] font-semibold',
          tones[tone]
        )}
      >
        Services
        <Icon
          name="chevron"
          size={16}
          className={cx('transition-transform', open && 'rotate-180')}
        />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute top-full left-1/2 z-50 mt-1 w-[280px] -translate-x-1/2 rounded-card-md border border-line bg-white p-2 shadow-card-light"
      >
        <ul className="flex flex-col">
          {items.map((item, i) => (
            <li key={item.href} className={cx(i === 1 && 'mt-1 border-t border-line pt-1')}>
              <SmartLink
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex flex-col gap-0.5 rounded-thumb px-3 py-2.5 focus-ring hover:bg-mint"
              >
                <span className="text-[15px] font-semibold text-navy">{item.label}</span>
                {item.note ? (
                  <span className="text-[13px] text-text-faint">{item.note}</span>
                ) : null}
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
