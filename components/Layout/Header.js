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
  return (
    <>
      <NotificationBar />
      <header
        ref={headerRef}
        className={
          'fixed z-30 w-full bg-white-500 transition-all ' +
          (scrollActive ? ' top-0 pt-0 shadow-md' : ' top-0 lg:top-[2.5rem]')
        }
      >
        <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-3 sm:px-8 sm:py-4 lg:px-16">
          <div className="flex items-center">
            <Link href="/" aria-label="Go to homepage">
              <Image src="/assets/logo.png" alt="Logo" width={75} height={75} priority />
            </Link>
          </div>
          <ul className="hidden items-center justify-center text-black-500 lg:flex lg:flex-1">
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-scrollOffset}
              onSetActive={() => {
                setActiveLink('services')
              }}
              className={
                'animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2' +
                (activeLink === 'services'
                  ? ' animation-active text-green-500'
                  : ' text-black-500 hover:text-green-500')
              }
            >
              Services
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-scrollOffset}
              onSetActive={() => {
                setActiveLink('about')
              }}
              className={
                'animation-hover relative mx-2 inline-block cursor-pointer px-4 py-2' +
                (activeLink === 'about'
                  ? ' animation-active text-green-500'
                  : ' text-black-500 hover:text-green-500')
              }
            >
              About
            </LinkScroll>
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
