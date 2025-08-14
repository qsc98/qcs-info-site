import { FaUsers } from 'react-icons/fa'
import { MdLocalHospital } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import { Link as LinkScroll } from 'react-scroll'

const MobileFloatingNav = ({ activeLink, setActiveLink }) => {
  return (
    <nav className="fixed bottom-6 left-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 transform lg:hidden">
      <div className="flex items-center justify-around space-x-6 rounded-full border border-white-500 bg-white-500 px-8 py-3 shadow-xl">
        <LinkScroll
          to="services"
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={() => setActiveLink('services')}
          className={
            'flex cursor-pointer flex-col items-center text-xs ' +
            (activeLink === 'services' ? 'text-green-500' : 'text-gray-600')
          }
        >
          <div className="rounded-full bg-white p-2 shadow-md">
            <MdLocalHospital className="h-5 w-5" />
          </div>
          <span className="mt-1">Services</span>
        </LinkScroll>

        <LinkScroll
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={() => setActiveLink('about')}
          className={
            'flex cursor-pointer flex-col items-center text-xs ' +
            (activeLink === 'about' ? 'text-green-500' : 'text-gray-600')
          }
        >
          <div className="rounded-full bg-white p-2 shadow-md">
            <FaUsers className="h-5 w-5" />
          </div>
          <span className="mt-1">About</span>
        </LinkScroll>

        <LinkScroll
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={() => setActiveLink('contact')}
          className={
            'flex cursor-pointer flex-col items-center text-xs ' +
            (activeLink === 'contact' ? 'text-green-500' : 'text-gray-600')
          }
        >
          <div className="rounded-full bg-white p-2 shadow-md">
            <HiOutlineMail className="h-5 w-5 text-black" />
          </div>
          <span className="mt-1">Contact</span>
        </LinkScroll>
      </div>
    </nav>
  )
}

export default MobileFloatingNav
