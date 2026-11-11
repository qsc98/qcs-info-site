'use client'

import { useEffect, useState } from 'react'

/**
 * §3.9 Mobile sticky bottom bar. Hidden while the waitlist section is on
 * screen and while the menu sheet is open (the header sets
 * <html data-menu="open">).
 */
export default function StickyBar() {
  const [waitlistInView, setWaitlistInView] = useState(false)

  useEffect(() => {
    const target = document.getElementById('waitlist')
    if (!target) return
    const observer = new IntersectionObserver(([entry]) => setWaitlistInView(entry.isIntersecting))
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      inert={waitlistInView}
      className={`fixed inset-x-3 bottom-[calc(16px+env(safe-area-inset-bottom))] z-30 flex gap-2 rounded-pill border border-line-ui bg-white p-2 shadow-bar transition-[translate,opacity,visibility] duration-300 md:hidden [html[data-menu=open]_&]:hidden ${
        waitlistInView ? 'invisible translate-y-[150%] opacity-0' : ''
      }`}
    >
      <a
        href="#waitlist"
        className="flex-1 rounded-pill bg-teal p-3.5 text-center text-[16px] font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
      >
        Join waitlist
      </a>
      <a
        href="#center"
        className="flex-1 rounded-pill bg-grey p-3.5 text-center text-[16px] font-bold text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
      >
        Find us
      </a>
    </div>
  )
}
