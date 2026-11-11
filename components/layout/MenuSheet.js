'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { MENU_ID } from '@/components/layout/MenuButton'
import Wordmark from '@/components/layout/Wordmark'
import { ButtonLink } from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import SmartLink from '@/components/ui/SmartLink'
import useModalBehavior from '@/hooks/useModalBehavior'
import { companyLinks, navLinks, serviceLinks } from '@/lib/navigation'
import siteConfig, { locality } from '@/site.config'

// Pages already among the header links at the top of the sheet are not repeated.
const moreLinks = companyLinks.filter((link) => !navLinks.some((nav) => nav.href === link.href))

const rowClass = 'flex min-h-12 items-center rounded-lg font-semibold focus-ring'

/**
 * Full-height menu sheet from the right (design/README.md §3.1): 48px rows,
 * focus kept inside, Escape and the backdrop close it.
 */
export default function MenuSheet({ open, onClose, links, waitlistHref }) {
  const reduceMotion = useReducedMotion()
  const sheetRef = useRef(null)
  const closeRef = useRef(null)
  useModalBehavior(open, { containerRef: sheetRef, initialFocusRef: closeRef, onClose })

  const sheetTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="backdrop"
          aria-hidden="true"
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[rgba(10,31,51,0.45)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
        />
      ) : null}
      {open ? (
        <motion.div
          key="sheet"
          ref={sheetRef}
          id={MENU_ID}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-y-0 right-0 z-50 flex w-[min(360px,88vw)] flex-col overflow-y-auto bg-white pb-[env(safe-area-inset-bottom)] shadow-bar"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={sheetTransition}
        >
          <div className="flex items-center justify-between gap-3 px-5 pt-3 pb-2">
            <Wordmark
              name={siteConfig.shortName}
              breakClassName=""
              className="font-display text-[15px] leading-[1.1] font-bold text-navy"
            />
            <button
              ref={closeRef}
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="flex size-11 items-center justify-center rounded-full bg-grey text-navy focus-ring"
            >
              <Icon name="close" size={20} />
            </button>
          </div>
          <nav aria-label="Menu" className="flex flex-1 flex-col px-5 pb-6">
            <ul className="border-b border-line pb-2">
              {links.map((link) => (
                <li key={link.href}>
                  <SmartLink
                    href={link.href}
                    onClick={onClose}
                    className={`${rowClass} text-[18px] text-navy`}
                  >
                    {link.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
            <p className="mt-4 type-eyebrow text-teal">Services</p>
            <ul className="border-b border-line py-1">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <SmartLink
                    href={link.href}
                    onClick={onClose}
                    className={`${rowClass} text-[17px] text-text`}
                  >
                    {link.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
            <ul className="py-1">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <SmartLink
                    href={link.href}
                    onClick={onClose}
                    className={`${rowClass} text-[17px] text-text`}
                  >
                    {link.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
            <ButtonLink
              href={waitlistHref}
              onClick={onClose}
              variant="accent"
              size="lg"
              className="mt-auto w-full"
            >
              Join the waitlist
            </ButtonLink>
            <p className="mt-3 text-center text-[13px] text-text-faint">
              {siteConfig.launch.statusShort} · {locality}
            </p>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
