import React, { useState, useEffect } from 'react'
import { Link as LinkScroll } from 'react-scroll'
import Image from 'next/image'
import LogoVPN from '../../public/assets/Logo-Transparent.png'
import NotificationBar from './NotificationBar'
import MobileFloatingNav from './MobileNavBar'

const Header = () => {
  const [activeLink, setActiveLink] = useState(null)
  const [scrollActive, setScrollActive] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20)
    })
  }, [])
  return (
    <>
      <NotificationBar />
      <header
        className={
          'fixed z-30 w-full bg-white-500 transition-all ' +
          (scrollActive ? ' top-0 pt-0 shadow-md' : ' top-0 lg:top-[2.5rem]')
        }
      >
        <nav className="mx-auto grid max-w-screen-xl grid-flow-col px-6 py-3 sm:px-8 sm:py-4 lg:px-16">
          <div className="col-start-1 col-end-2 flex items-center">
            <Image src={LogoVPN} alt="Logo" width={75} height={75} />
          </div>
          <ul className="col-start-8 col-end-8 hidden items-center text-black-500 lg:flex">
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
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
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
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
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
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
          </ul>
          <div className="col-start-10 col-end-12 flex items-center justify-end font-medium">
            <LinkScroll to="contact">
              <button className="hover:shadow-green rounded-l-full rounded-r-full border border-green-500 bg-white-500 px-5 py-2 font-medium capitalize tracking-wide text-green-500 outline-none transition-all hover:bg-green-500 hover:text-white-500 sm:px-8">
                Schedule a Visit
              </button>
            </LinkScroll>
          </div>
        </nav>
      </header>

      <MobileFloatingNav activeLink={activeLink} setActiveLink={setActiveLink} />
    </>
  )
}

export default Header
