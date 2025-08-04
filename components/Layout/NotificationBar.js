import MapPinIcon from '@heroicons/react/24/solid/MapPinIcon';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const NotificationBar = () => {
  return (
    <div className="hidden lg:flex bg-primary text-primary-content text-sm py-2 px-4 w-full">
      <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between gap-6">
        {/* Left: Address */}
        <div className="flex items-center gap-1 flex-1">
          <MapPinIcon className="h-4 w-4" />
          <span>811 Mt Holly Rd, Fairdale, KY 40118</span>
        </div>

        {/* Center: Message + Contact Button */}
        <div className="flex items-center justify-center flex-1 gap-3 text-center">
          <span className="font-semibold whitespace-nowrap">
            🎉 Now enrolling new clients!
          </span>
          <a
            href="#contact"
            className="btn btn-xs btn-accent normal-case text-white"
          >
            Contact Us
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center justify-end gap-4 flex-1">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="h-5 w-5 text-[#1877F2] hover:scale-110 transition-transform duration-200" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-5 w-5 text-[#E1306C] hover:scale-110 transition-transform duration-200" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="h-5 w-5 text-[#0A66C2] hover:scale-110 transition-transform duration-200" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
