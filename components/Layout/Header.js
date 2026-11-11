'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { companyLinks, sectionHref, sectionLinks, serviceLinks } from './navLinks'
import Wordmark from './Wordmark'
import siteConfig from '../../site.config'
import LineIcon from '../misc/LineIcon'

const LOGO = '/assets/Logo-Transparent.png'
const MENU_ID = 'site-menu'
// "Our center" is already a section link at the top of the sheet.
const sheetCompanyLinks = companyLinks.filter((l) => l.href !== '/our-center')

const focusOnImage =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
const focusOnLight =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal'

/** Same-page anchors stay plain <a> so they work before hydration. */
function NavLink({ href, className, children, onClick }) {
  if (href.startsWith('#')) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

function MenuButton({ onOpen, open, className }) {
  return (
    <button
      type="button"
      aria-label="Open menu"
      aria-expanded={open}
      aria-controls={MENU_ID}
      aria-haspopup="dialog"
      onClick={onOpen}
      className={`flex size-11 items-center justify-center rounded-full text-navy ${className}`}
    >
      <LineIcon name="menu" size={20} />
    </button>
  )
}

function trapFocus(event, container) {
  const items = container.querySelectorAll('a[href], button:not([disabled])')
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

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const reduceMotion = useReducedMotion()

  // The menu belongs to the page it was opened on, so navigating closes it.
  const [menuPath, setMenuPath] = useState(null)
  const menuOpen = menuPath === pathname
  const openMenu = () => setMenuPath(pathname)
  const closeMenu = () => setMenuPath(null)

  // The notch exists only while the hero top is in view; after that the
  // compact bar takes over. Inner pages always use the compact bar.
  const [notchOut, setNotchOut] = useState(false)
  const notchRef = useRef(null)
  const compact = !isHome || notchOut

  const sheetRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!isHome || !notchRef.current) return
    const observer = new IntersectionObserver(([entry]) => setNotchOut(!entry.isIntersecting))
    observer.observe(notchRef.current)
    return () => observer.disconnect()
  }, [isHome])

  useEffect(() => {
    if (!menuOpen) return
    const opener = document.activeElement
    const root = document.documentElement
    const previousOverflow = document.body.style.overflow
    root.dataset.menu = 'open'
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuPath(null)
      } else if (event.key === 'Tab' && sheetRef.current) {
        trapFocus(event, sheetRef.current)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      delete root.dataset.menu
      document.body.style.overflow = previousOverflow
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus({ preventScroll: true })
    }
  }, [menuOpen])

  const homeHref = isHome ? '#top' : '/'
  const links = sectionLinks.map((l) => ({ ...l, href: sectionHref(l.id, isHome) }))
  const waitlistHref = sectionHref('waitlist', isHome)

  return (
    <header className="leading-[normal]">
      {isHome ? (
        // The notch: a white tab cut into the hero's top-left corner. It
        // sits in the same container as the hero panel (Home/Hero.js), so its
        // edges line up with the panel's.
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20">
          <div className="mx-auto max-w-[1280px] px-2.5 pt-2.5 md:px-4 md:pt-4">
            <div ref={notchRef} className="relative h-14 lg:h-[68px]" inert={compact}>
              <a
                href={homeHref}
                className={`pointer-events-auto absolute top-0 left-0 flex h-14 items-center gap-2 rounded-br-[20px] bg-white pr-[18px] pb-2 pl-1.5 lg:h-[68px] lg:gap-3 lg:rounded-br-[28px] lg:pr-[30px] lg:pb-3 lg:pl-2.5 ${focusOnLight}`}
              >
                <Image src={LOGO} alt="" width={44} height={44} className="size-9 lg:size-11" />
                <Wordmark
                  breakClassName="lg:hidden"
                  className="font-display text-[14px] leading-[1.05] font-bold text-navy lg:text-[18px] lg:leading-normal"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-full size-5 bg-[radial-gradient(circle_at_100%_100%,transparent_20px,#fff_20px)] lg:size-7 lg:bg-[radial-gradient(circle_at_100%_100%,transparent_28px,#fff_28px)]"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-full left-0 size-5 bg-[radial-gradient(circle_at_100%_100%,transparent_20px,#fff_20px)] lg:size-7 lg:bg-[radial-gradient(circle_at_100%_100%,transparent_28px,#fff_28px)]"
                />
              </a>

              <nav
                aria-label="Main"
                className="pointer-events-auto absolute top-2.5 right-3 flex items-center gap-1.5 lg:top-3.5 lg:right-7 lg:gap-8"
              >
                <ul className="hidden gap-[26px] lg:flex">
                  {links.map((l) => (
                    <li key={l.id}>
                      <NavLink
                        href={l.href}
                        className={`block rounded py-2.5 text-[16px] font-semibold text-white hover:text-mint-strong ${focusOnImage}`}
                      >
                        {l.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <a
                  href={waitlistHref}
                  className={`rounded-pill bg-white px-3.5 py-3 text-[14px] leading-5 font-bold text-navy lg:px-5 lg:text-[15px] ${focusOnImage}`}
                >
                  <span className="lg:hidden">Waitlist</span>
                  <span className="hidden lg:inline">Join the waitlist</span>
                </a>
                <MenuButton
                  open={menuOpen}
                  onOpen={openMenu}
                  className={`bg-white lg:hidden ${focusOnImage}`}
                />
              </nav>
            </div>
          </div>
        </div>
      ) : null}

      {/* Compact sticky bar: inner pages always, home after the hero top. */}
      <div
        inert={!compact}
        className={`fixed inset-x-0 top-0 z-40 border-b border-line bg-white transition-[translate,visibility] duration-300 ${
          compact ? 'visible translate-y-0' : 'invisible -translate-y-full'
        }`}
      >
        <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-4 px-3 md:px-6 lg:h-16 lg:px-10">
          <NavLink
            href={homeHref}
            className={`flex items-center gap-2 rounded-lg lg:gap-3 ${focusOnLight}`}
          >
            <Image src={LOGO} alt="" width={44} height={44} className="size-9 lg:size-10" />
            <Wordmark
              breakClassName="lg:hidden"
              className="font-display text-[14px] leading-[1.05] font-bold text-navy lg:text-[18px] lg:leading-normal"
            />
          </NavLink>
          <nav aria-label="Main" className="flex items-center gap-1.5 lg:gap-8">
            <ul className="hidden gap-[26px] lg:flex">
              {links.map((l) => (
                <li key={l.id}>
                  <NavLink
                    href={l.href}
                    className={`block rounded py-2.5 text-[16px] font-semibold text-navy hover:text-teal ${focusOnLight}`}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <NavLink
              href={waitlistHref}
              className={`rounded-pill bg-teal px-3.5 py-3 text-[14px] leading-5 font-bold text-white hover:bg-teal-hover lg:bg-navy lg:px-5 lg:text-[15px] lg:hover:bg-teal ${focusOnLight}`}
            >
              <span className="lg:hidden">Waitlist</span>
              <span className="hidden lg:inline">Join the waitlist</span>
            </NavLink>
            <MenuButton
              open={menuOpen}
              onOpen={openMenu}
              className={`bg-grey lg:hidden ${focusOnLight}`}
            />
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="backdrop"
            aria-hidden="true"
            onClick={closeMenu}
            className="fixed inset-0 z-50 bg-[rgba(10,31,51,0.45)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
          />
        ) : null}
        {menuOpen ? (
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
            transition={reduceMotion ? { duration: 0 } : { duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="flex items-center justify-between gap-3 px-5 pt-3 pb-2">
              <Wordmark
                breakClassName=""
                className="font-display text-[15px] leading-[1.1] font-bold text-navy"
              />
              <button
                ref={closeRef}
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
                className={`flex size-11 items-center justify-center rounded-full bg-grey text-navy ${focusOnLight}`}
              >
                <LineIcon name="close" size={20} />
              </button>
            </div>
            <nav aria-label="Menu" className="flex flex-1 flex-col px-5 pb-6">
              <ul className="border-b border-line pb-2">
                {links.map((l) => (
                  <li key={l.id}>
                    <NavLink
                      href={l.href}
                      onClick={closeMenu}
                      className={`flex min-h-12 items-center rounded-lg text-[18px] font-semibold text-navy ${focusOnLight}`}
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13px] font-bold tracking-[0.08em] text-teal uppercase">
                Services
              </p>
              <ul className="border-b border-line py-1">
                {serviceLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={closeMenu}
                      className={`flex min-h-12 items-center rounded-lg text-[17px] font-semibold text-text ${focusOnLight}`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="py-1">
                {sheetCompanyLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={closeMenu}
                      className={`flex min-h-12 items-center rounded-lg text-[17px] font-semibold text-text ${focusOnLight}`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <NavLink
                href={waitlistHref}
                onClick={closeMenu}
                className={`mt-auto rounded-pill bg-teal px-5 py-4 text-center text-[17px] font-bold text-white hover:bg-teal-hover ${focusOnLight}`}
              >
                Join the waitlist
              </NavLink>
              <p className="mt-3 text-center text-[13px] text-text-faint">
                {siteConfig.launch.statusShort} · {siteConfig.address.city},{' '}
                {siteConfig.address.region}
              </p>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
