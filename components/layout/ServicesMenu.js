'use client'

import Link from 'next/link'
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
 * The header's "Services" item (desktop). The word is a link to the services
 * section on `/`; hovering it, or pressing the chevron, opens a white panel
 * listing the four service pages, like the live site's dropdown. The panel
 * closes when the pointer leaves, on Escape, on a click outside, when focus
 * leaves and when a link is chosen.
 */
export default function ServicesMenu({ overviewHref, tone = 'default' }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const toggleRef = useRef(null)
  const panelId = useId()

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }
    const onKey = (event) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
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
  // Touch and pen have no hover; they use the chevron.
  const onPointerEnter = (event) => event.pointerType === 'mouse' && setOpen(true)
  const onPointerLeave = (event) => event.pointerType === 'mouse' && setOpen(false)

  return (
    <div
      ref={rootRef}
      onBlur={onBlur}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      className="relative"
    >
      <div className={cx('flex items-center text-[16px] font-semibold', tones[tone])}>
        <SmartLink
          href={overviewHref}
          onClick={() => setOpen(false)}
          className={cx('rounded py-2.5', tones[tone])}
        >
          Services
        </SmartLink>
        <button
          ref={toggleRef}
          type="button"
          aria-label="Show the services"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className={cx('flex size-6 items-center justify-center rounded', tones[tone])}
        >
          <Icon
            name="chevron"
            size={16}
            className={cx('transition-transform', open && 'rotate-180')}
          />
        </button>
      </div>
      {/* Padding, not margin, keeps the gap under the trigger inside the hover area. */}
      <div
        id={panelId}
        hidden={!open}
        className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-1"
      >
        <ul className="flex w-[260px] flex-col rounded-card-md border border-line bg-white p-2 shadow-card-light">
          {serviceLinks.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                onClick={() => setOpen(false)}
                className="block rounded-thumb px-3 py-2.5 text-[15px] font-semibold text-navy focus-ring hover:bg-mint"
              >
                {service.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
