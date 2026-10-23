'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { FaUsers } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { MdHomeWork, MdLocalHospital, MdWork } from 'react-icons/md'
import { serviceLinks } from './navLinks'

const items = [
  { label: 'Our Center', href: '/our-center', Icon: MdHomeWork },
  { label: 'About', href: '/about-us', Icon: FaUsers },
  { label: 'Contact', href: '/contact', Icon: HiOutlineMail },
]

const MobileFloatingNav = () => {
  const pathname = usePathname()
  const [openPath, setOpenPath] = useState(null)
  const servicesOpen = openPath === pathname
  const setServicesOpen = (next) => setOpenPath(next ? pathname : null)
  const navRef = useRef(null)

  useEffect(() => {
    if (!servicesOpen) return
    const onOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) setOpenPath(null)
    }
    const onKey = (event) => {
      if (event.key === 'Escape') setOpenPath(null)
    }
    document.addEventListener('mousedown', onOutside)
    document.addEventListener('touchstart', onOutside)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onOutside)
      document.removeEventListener('touchstart', onOutside)
      document.removeEventListener('keydown', onKey)
    }
  }, [servicesOpen])

  const servicesActive = serviceLinks.some((l) => l.href === pathname)
  const itemClass = (active) =>
    'flex min-w-[64px] flex-col items-center gap-1 rounded-2xl px-2 py-1 text-sm font-medium transition focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal/60 ' +
    (active ? 'text-green-500' : 'text-slate-700')

  return (
    <nav
      ref={navRef}
      aria-label="Mobile"
      className="fixed bottom-4 left-1/2 z-50 w-[94vw] max-w-md -translate-x-1/2 lg:hidden"
    >
      <div className="rounded-[32px] border border-white/70 bg-white/95 p-3 shadow-[0_25px_55px_-30px_rgba(15,34,71,0.65)] backdrop-blur-sm">
        <div className="flex items-center justify-around">
          <button
            type="button"
            aria-expanded={servicesOpen}
            aria-controls="mobile-services"
            onClick={() => setServicesOpen(!servicesOpen)}
            className={itemClass(servicesOpen || servicesActive)}
          >
            <span className="rounded-full bg-white p-2.5 shadow-md">
              <MdLocalHospital className="size-6" aria-hidden="true" />
            </span>
            Services
          </button>
          {items.map(({ label, href, Icon }) => (
            <Link key={href} href={href} className={itemClass(pathname === href)}>
              <span className="rounded-full bg-white p-2.5 shadow-md">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              {label}
            </Link>
          ))}
        </div>

        <div
          id="mobile-services"
          className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'mt-3 max-h-[560px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="rounded-3xl border border-[#cfeee7] bg-white p-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-sm font-semibold text-[#0d4346]">Services</span>
              <button
                type="button"
                className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal/60"
                onClick={() => setServicesOpen(false)}
              >
                Close
              </button>
            </div>
            <ul className="mt-2 grid grid-cols-1 gap-1.5">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-2xl border border-[#d2ebe4] bg-[#f6fcfa] px-4 py-3 text-base font-semibold text-[#0b3b3e] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal/60"
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-slate-400">›</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/careers"
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium text-slate-700 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal/60"
                >
                  <MdWork className="size-5" aria-hidden="true" /> Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MobileFloatingNav
