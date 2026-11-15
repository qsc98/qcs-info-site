'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Icon from '@/components/ui/Icon'
import siteConfig from '@/site.config'

/**
 * The thin navy bar above the header, from `siteConfig.announcement`: the
 * badges, the message from 768px, and a link. It
 * scrolls away with the page. While any of it is still on screen, it sets
 * `--announcement-offset` on <html> so the fixed compact bar sits just
 * below it instead of covering it.
 */
export default function AnnouncementBar() {
  const ref = useRef(null)
  const note = siteConfig.announcement

  useEffect(() => {
    const bar = ref.current
    if (!bar) return undefined
    const root = document.documentElement
    let frame = 0
    const update = () => {
      frame = 0
      const offset = Math.max(0, bar.offsetHeight - window.scrollY)
      root.style.setProperty('--announcement-offset', `${offset}px`)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      cancelAnimationFrame(frame)
      root.style.removeProperty('--announcement-offset')
    }
  }, [])

  if (!note) return null

  return (
    <div ref={ref} className="relative z-30 bg-navy text-white">
      <p className="mx-auto flex max-w-page items-center justify-center gap-2 px-4 py-2 text-center text-[13px] leading-snug font-semibold md:gap-2.5 md:text-[14px]">
        {note.badges.map((badge, i) => (
          <span
            key={badge}
            className={
              i === 0
                ? 'flex-none rounded-pill border border-mint-strong/40 bg-mint-strong/15 px-2.5 py-1 font-display text-[11px] leading-none font-bold tracking-[0.08em] text-mint-strong uppercase'
                : 'flex-none rounded-pill bg-amber px-2.5 py-1 font-display text-[11px] leading-none font-bold tracking-[0.08em] text-navy uppercase'
            }
          >
            {badge}
          </span>
        ))}
        <span className="hidden md:inline">{note.text}</span>
        <Link
          href={note.href}
          className="inline-flex flex-none items-center gap-1 rounded underline decoration-white/40 underline-offset-4 focus-ring-inverse hover:decoration-white"
        >
          {note.linkLabel}
          <Icon name="arrow" size={14} />
        </Link>
      </p>
    </div>
  )
}
