import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FaUsers } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {
  MdLocalHospital,
  MdOutlineDashboardCustomize,
  MdElderly,
  MdRestaurantMenu,
  MdLocalTaxi,
  MdHealthAndSafety,
  MdWork,
} from 'react-icons/md'
import { Link as LinkScroll } from 'react-scroll'

const MobileFloatingNav = ({ activeLink, setActiveLink, scrollOffset = 0 }) => {
  const [servicesOpen, setServicesOpen] = useState(false)
  const navRef = useRef(null)
  const serviceLinks = [
    { label: 'Services Overview', type: 'scroll', target: 'services', icon: MdOutlineDashboardCustomize },
    { label: 'Adult Day Care', type: 'link', href: '/adult-day-care', icon: MdElderly },
    { label: 'Nutritious Meals', type: 'link', href: '/nutritious-meals', icon: MdRestaurantMenu },
    { label: 'Medical Transportation', type: 'link', href: '/medical-transportation', icon: MdLocalTaxi },
    { label: 'In-Home Care', type: 'link', href: '/in-home-care', icon: MdHealthAndSafety },
  ]
  const renderServiceLink = (item) => {
    const Icon = item.icon
    const content = (
      <div className="group flex items-center justify-between gap-4 rounded-3xl border border-[#d2ebe4] bg-gradient-to-r from-white/95 via-white/90 to-[#f2fbf8] px-4 py-3 text-sm font-semibold text-[#0b3b3e] shadow-[0_15px_35px_-28px_rgba(10,64,60,0.7)] transition hover:-translate-y-0.5 hover:border-[#0b3b3e]/20">
        <span className="flex size-10 flex-none items-center justify-center rounded-full border border-[#0a1e38]/30 bg-[#0a1e38] text-white shadow-[0_10px_25px_-18px_rgba(10,30,56,0.9)]">
          {Icon ? <Icon className="size-5" /> : <span className="size-1 rounded-full bg-white" />}
        </span>
        <span className="flex-1 text-right">{item.label}</span>
      </div>
    )

    if (item.type === 'scroll') {
      return (
        <LinkScroll
          key={item.label}
          to={item.target}
          smooth
          duration={600}
          offset={-scrollOffset}
          onClick={() => {
            setServicesOpen(false)
            setActiveLink('services')
          }}
          className="flex-1 cursor-pointer"
        >
          {content}
        </LinkScroll>
      )
    }

    return (
      <Link key={item.label} href={item.href} className="flex-1" onClick={() => setServicesOpen(false)}>
        {content}
      </Link>
    )
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!navRef.current) return
      if (servicesOpen && !navRef.current.contains(event.target)) {
        setServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
    }
  }, [servicesOpen])

  return (
    <nav
      ref={navRef}
      className="fixed bottom-6 left-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 lg:hidden"
    >
      <div className="rounded-[42px] border border-white/70 bg-white/90 p-4 shadow-[0_25px_55px_-30px_rgba(15,34,71,0.65)] backdrop-blur">
        <div className="flex items-center justify-around space-x-6">
          <button
            onClick={() => setServicesOpen((open) => !open)}
            className={
              'flex flex-col items-center text-xs transition ' +
              (servicesOpen ? 'text-green-500' : 'text-gray-600')
            }
          >
            <div className="rounded-full bg-white p-2 shadow-md">
              <MdLocalHospital className="size-5" />
            </div>
            <span className="mt-1">Services</span>
          </button>

          <Link
            href="/about-us"
            className="flex flex-col items-center text-xs text-gray-600 transition hover:text-green-500"
            onClick={() => setActiveLink('about')}
          >
            <div className="rounded-full bg-white p-2 shadow-md">
              <FaUsers className="size-5" />
            </div>
            <span className="mt-1">About</span>
          </Link>
          <Link href="/careers" className="flex flex-col items-center text-xs text-gray-600 transition hover:text-green-500">
            <div className="rounded-full bg-white p-2 shadow-md">
              <MdWork className="size-5" />
            </div>
            <span className="mt-1">Careers</span>
          </Link>

          <Link
            href="/contact"
            className={
              'flex flex-col items-center text-xs transition ' +
              (activeLink === 'contact' ? 'text-green-500' : 'text-gray-600')
            }
            onClick={() => setActiveLink('contact')}
          >
            <div className="rounded-full bg-white p-2 shadow-md">
              <HiOutlineMail className="size-5 text-black" />
            </div>
            <span className="mt-1">Contact</span>
          </Link>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ${servicesOpen ? 'mt-4 max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="relative overflow-hidden rounded-[30px] border border-[#cfeee7] bg-white/90 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
            <div className="pointer-events-none absolute inset-0 bg-[url('/assets/honeycomb-background.jpg')] bg-[length:170%] bg-center opacity-15" />
            <div className="relative flex items-center justify-between text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[#0d4346]">
              <span>Service Navigator</span>
              <button
                className="rounded-full border border-white/60 bg-white/50 px-2 py-0.5 text-[0.65rem] text-slate-500 shadow-sm backdrop-blur-sm"
                onClick={() => setServicesOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="relative mt-3 grid grid-cols-1 gap-2">
              {serviceLinks.map((item) => renderServiceLink(item))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MobileFloatingNav
