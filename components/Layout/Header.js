'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import MobileFloatingNav from './MobileNavBar'
import { primaryLinks, serviceLinks } from './navLinks'
import NotificationBar from './NotificationBar'
import SocialLinks from './SocialLinks'
import siteConfig from '../../site.config'

const Header = () => {
  const pathname = usePathname()
  const [scrollActive, setScrollActive] = useState(false)
  const [openPath, setOpenPath] = useState(null)
  const servicesOpen = openPath === pathname
  const setServicesOpen = (next) => setOpenPath(next ? pathname : null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrollActive(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!servicesOpen) return
    const onPointer = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setOpenPath(null)
    }
    const onKey = (event) => {
      if (event.key === 'Escape') setOpenPath(null)
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [servicesOpen])

  const servicesActive = serviceLinks.some((l) => l.href === pathname)
  const linkClass = (active) =>
    'animation-hover relative mx-1 inline-flex items-center rounded-lg px-4 py-2 text-base font-medium transition focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal/60 ' +
    (active ? 'animation-active text-green-500' : 'text-black-500 hover:text-green-500')

  return (
    <div className="fixed top-0 z-30 w-full">
      <div className={scrollActive ? 'hidden' : ''}>
        <NotificationBar />
      </div>
      <header className={'w-full transition-all ' + (scrollActive ? 'bg-white shadow-md' : 'bg-transparent')}>
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8 sm:py-4 lg:px-16"
        >
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="rounded-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal/60"
          >
            <Image src="/assets/Logo-Transparent.png" alt="" width={75} height={75} priority />
          </Link>

          <ul className="hidden items-center justify-center lg:flex lg:flex-1">
            <li className="relative" ref={dropdownRef}>
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={linkClass(servicesOpen || servicesActive) + ' gap-2'}
              >
                Services
                <svg
                  className={`size-3 transition ${servicesOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 10 6"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {servicesOpen ? (
                <div
                  id="services-menu"
                  className="absolute left-0 z-50 mt-2 w-64 rounded-2xl border border-white/40 bg-white/95 p-3 shadow-[0_20px_45px_-25px_rgba(15,34,71,0.35)] backdrop-blur-sm"
                >
                  <ul className="space-y-1 text-base">
                    {serviceLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-xl px-3 py-2.5 text-slate-700 transition hover:bg-slate-50 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal/60"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
            {primaryLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass(pathname === item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <SocialLinks className="hidden lg:flex" />
        </nav>
      </header>

      <MobileFloatingNav />
    </div>
  )
}

export default Header
