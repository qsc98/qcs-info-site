import MapPinIcon from '@heroicons/react/24/solid/MapPinIcon'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const NotificationBar = () => {
  return (
    <div className="text-primary-content hidden w-full bg-primary px-4 py-2 text-sm lg:flex">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-6">
        {/* Left: Address */}
        <div className="flex flex-1 items-center gap-1">
          <MapPinIcon className="h-4 w-4" />
          <span>811 Mt Holly Rd, Fairdale, KY 40118</span>
        </div>

        {/* Center: Message + Contact Button */}
        <div className="flex flex-1 items-center justify-center gap-3 text-center">
          <span className="whitespace-nowrap font-semibold">🎉 Now enrolling new clients!</span>
          <a href="#contact" className="btn btn-xs btn-accent text-white normal-case">
            Contact Us
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="h-5 w-5 text-[#1877F2] transition-transform duration-200 hover:scale-110" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-5 w-5 text-[#E1306C] transition-transform duration-200 hover:scale-110" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="h-5 w-5 text-[#0A66C2] transition-transform duration-200 hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default NotificationBar
