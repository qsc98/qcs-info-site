import React, { useState, useEffect, useRef } from 'react'
import { Link as LinkScroll } from 'react-scroll'
import Image from 'next/image'
import NotificationBar from './NotificationBar'
import MobileFloatingNav from './MobileNavBar'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Header = () => {
  const [activeLink, setActiveLink] = useState(null)
  const [scrollActive, setScrollActive] = useState(false)
  const [scrollOffset, setScrollOffset] = useState(0)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrollActive(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const updateOffset = () => {
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0
      setScrollOffset(headerHeight + 16)
    }
    updateOffset()
    window.addEventListener('resize', updateOffset)
    return () => window.removeEventListener('resize', updateOffset)
  }, [])
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <NotificationBar />
      <header
        ref={headerRef}
        className={
          'fixed z-30 w-full bg-white-500 transition-all ' +
          (scrollActive ? ' top-0 pt-0 shadow-md' : ' top-[2.25rem] lg:top-[2.5rem]')
        }
      >
        <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-3 sm:px-8 sm:py-4 lg:px-16">
          <div className="flex items-center">
            <Link href="/" aria-label="Go to homepage">
              <Image src="/assets/logo.png" alt="Logo" width={75} height={75} priority />
            </Link>
          </div>
          <ul className="hidden items-center justify-center text-black-500 lg:flex lg:flex-1">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen((open) => !open)}
                className={`animation-hover relative mx-2 inline-flex items-center gap-2 px-4 py-2 font-medium transition ${
                  servicesOpen || activeLink === 'services'
                    ? ' animation-active text-green-500'
                    : ' text-black-500 hover:text-green-500'
                }`}
              >
                Services
                <svg
                  className={`h-3 w-3 transition ${servicesOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {servicesOpen ? (
                <div className="absolute left-0 z-50 mt-2 w-60 rounded-2xl border border-white/40 bg-white/95 p-4 shadow-[0_20px_45px_-25px_rgba(15,34,71,0.35)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#116768]">
                    Explore Services
                  </p>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>
                      <LinkScroll
                        to="services"
                        smooth
                        duration={600}
                        offset={-scrollOffset}
                        onClick={() => setServicesOpen(false)}
                        className="flex cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-slate-700 transition hover:bg-slate-50"
                      >
                        Services Overview
                        <span className="text-xs text-slate-400">↓</span>
                      </LinkScroll>
                    </li>
                    <li>
                      <Link
                        href={{ pathname: '/adult-day-care' }}
                        className="block rounded-xl px-3 py-2 text-slate-700 transition hover:bg-slate-50"
                        onClick={() => setServicesOpen(false)}
                      >
                        Adult Day Care
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={{ pathname: '/nutritious-meals' }}
                        className="block rounded-xl px-3 py-2 text-slate-700 transition hover:bg-slate-50"
                        onClick={() => setServicesOpen(false)}
                      >
                        Nutritious Meals
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={{ pathname: '/medical-transportation' }}
                        className="block rounded-xl px-3 py-2 text-slate-700 transition hover:bg-slate-50"
                        onClick={() => setServicesOpen(false)}
                      >
                        Medical Transportation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={{ pathname: '/in-home-care' }}
                        className="block rounded-xl px-3 py-2 text-slate-700 transition hover:bg-slate-50"
                        onClick={() => setServicesOpen(false)}
                      >
                        In-Home Care
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
            <Link
              href="/about-us"
              className="animation-hover relative mx-2 inline-block px-4 py-2 text-black-500 transition hover:text-green-500"
              onClick={() => setActiveLink('about')}
            >
              About
            </Link>
            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-scrollOffset}
              onSetActive={() => {
                setActiveLink('contact')
              }}
              className={
                'animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2' +
                (activeLink === 'contact'
                  ? ' animation-active text-green-500'
                  : ' text-black-500 hover:text-green-500')
              }
            >
              Contact
            </LinkScroll>
          </ul>
          <div className="flex items-center justify-end gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="h-5 w-5 text-[#1877F2] transition-transform duration-200 hover:scale-110" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5 text-[#E1306C] transition-transform duration-200 hover:scale-110" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-5 w-5 text-[#0A66C2] transition-transform duration-200 hover:scale-110" />
            </a>
          </div>
        </nav>
      </header>

      <MobileFloatingNav
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        scrollOffset={scrollOffset}
      />
    </>
  )
}

export default Header
