import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import LogoVPN from "../../public/assets/Logo-Transparent.png";

const Footer = () => {
  return (
<footer className="bg-white text-primary-content">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Newsletter */} 
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div>
            <h2 className="text-2xl font-bold text-black-700 text-center lg:text-left">Get the latest news!</h2>
            <p className="mt-4 text-sm text-primary-800">
              Subscribe to stay informed about updates, services, and upcoming events.
            </p>
          </div>

          <form className="w-full lg:flex lg:items-end">
            <label htmlFor="UserEmail" className="sr-only">Email</label>
            <div className="w-full rounded-xl border border-gray-500 bg-gray-700/50 px-4 py-3 focus-within:ring-2 focus-within:ring-green-500 transition-shadow sm:flex sm:items-center sm:gap-4 shadow-md">
              <input
                type="email"
                id="UserEmail"
                placeholder="you@example.com"
                className="text-black-600 placeholder-gray-400 focus:outline-none sm:text-sm w-full"
              />
              <button
                className="mt-2 sm:mt-0 w-full sm:w-auto shrink-0 rounded-lg bg-green-600 px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        {/* Main Grid: Contact - Logo/Social - Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-t border-gray-100 pt-8">
          {/* Explore Our Services */}
          <div className="lg:text-left text-center ">
            <h4 className="text-lg font-semibold text-black-500 mb-4">Explore Our Services</h4>
            <ul className="space-y-2 text-sm text-black-500">
              {[
                "Adult Day Health Care",
                "Medical Transportation",
                "Nutritious Meals",
                "In-Home Care Support",
                "Activities & Engagement",
                "Our Approach to Safety",
              ].map((item) => (
                <li key={item} className="hover:text-black-500 cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Policies */}
          <div className="text-center">
            <span className="text-sm text-black-500">811 Mt Holly Rd, Fairdale KY, 40118</span>
            <div className="mt-2">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.5790456946583!2d-85.71517728469145!3d38.11333667970592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690a4695555555%3A0x1111111111111111!2s811%20Mt%20Holly%20Rd%2C%20Fairdale%2C%20KY%2040118!5e0!3m2!1sen!2sus!4v1660000000000"
                width="100%"
                height="150"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md border border-gray-200 dark:border-gray-800"
              ></iframe>
            </div>
          </div>

          {/* Center: Logo, tagline, socials */}
          <div className="text-center">
            <Image src={LogoVPN} alt="Logo" width={75} height={75} className="mx-auto" />
            <span className="text-sm text-black-500">
              We provide compassionate adult day care and in-home support services for families in
              Louisville, KY. Helping individuals live safely, socially, and independently.
            </span>
            <div className="flex justify-center gap-4 mt-8">
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

        {/* Bottom Row */}
        <div className="text-center sm:flex sm:justify-between text-sm text-gray-400">
          <span>&copy; {new Date().getFullYear()} Quality Senior Health Care. All rights reserved.</span>
          <ul className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-4 sm:justify-end">
            <li>
              <a href="/privacy-policy" className="hover:text-green-500">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-green-500">Terms of Service</a>
            </li>
            <li>
              <a href="/disclaimer" className="hover:text-green-500">Disclaimer</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
