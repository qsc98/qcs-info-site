import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import LogoVPN from "../../public/assets/Logo-Transparent.png";
import NotificationBar from "./NotificationBar";
import MobileFloatingNav from "./MobileNavBar";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <NotificationBar/>
      <header
        className={
          "fixed w-full z-30 bg-white-500 transition-all " +
          (scrollActive
            ? " top-0 shadow-md pt-0"
            : " top-0 lg:top-[2.5rem]")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Image
              src={LogoVPN}
              alt="Logo"
              width={75}
              height={75}
            />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("services");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "services"
                  ? " text-green-500 animation-active "
                  : " text-black-500 hover:text-green-500 ")
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
                setActiveLink("contact");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "contact"
                  ? " text-green-500 animation-active "
                  : " text-black-500 hover:text-green-500 ")
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
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-green-500 animation-active "
                  : " text-black-500 hover:text-green-500 ")
              }
            >
              About
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <LinkScroll to='contact'>
              <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-green-500 text-green-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-green-500 hover:text-white-500 transition-all hover:shadow-green ">
                Schedule a Visit
              </button>
            </LinkScroll>
          </div>
        </nav>
      </header>
      
      <MobileFloatingNav activeLink={activeLink} setActiveLink={setActiveLink} />
    </>
  );
};

export default Header;
