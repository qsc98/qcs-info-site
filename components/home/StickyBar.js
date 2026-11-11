'use client'

import { ButtonLink } from '@/components/ui/Button'
import useInView from '@/hooks/useInView'
import cx from '@/lib/cx'

/**
 * §3.9 Phone-only bar with the two main actions. It steps aside while the
 * waitlist section is on screen and while the header's menu sheet is open
 * (the header sets <html data-menu="open">).
 */
export default function StickyBar() {
  const waitlistInView = useInView('waitlist')

  return (
    <div
      inert={waitlistInView}
      className={cx(
        'fixed inset-x-3 bottom-[calc(16px+env(safe-area-inset-bottom))] z-30 flex gap-2 rounded-pill border border-line-ui bg-white p-2 shadow-bar transition-[translate,opacity,visibility] duration-300 md:hidden [html[data-menu=open]_&]:hidden',
        waitlistInView && 'invisible translate-y-[150%] opacity-0'
      )}
    >
      <ButtonLink href="#waitlist" variant="accent" className="flex-1">
        Join waitlist
      </ButtonLink>
      <ButtonLink href="#center" variant="subtle" className="flex-1">
        Find us
      </ButtonLink>
    </div>
  )
}
