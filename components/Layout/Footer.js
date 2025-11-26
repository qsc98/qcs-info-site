import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Logo from '../../public/assets/Logo-Circle.png'

const Footer = () => {
  return (
    <footer className="bg-primary text-white-500">
      <div className="mx-auto max-w-screen-xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        {/* Newsletter */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-center text-2xl font-bold text-white lg:text-left">
              Get the latest news!
            </h2>
            <p className="mt-4 text-sm text-gray-400">
              Subscribe to stay informed about updates, services, and upcoming events.
            </p>
          </div>

          <form className="w-full lg:flex lg:items-end">
            <label htmlFor="UserEmail" className="sr-only">
              Email
            </label>
            <div className="w-full rounded-xl border border-gray-500 bg-black-600 px-4 py-3 shadow-md focus-within:ring-2 focus-within:ring-green-500 sm:flex sm:items-center sm:gap-4">
              <input
                type="email"
                id="UserEmail"
                placeholder="you@example.com"
                className="w-full bg-transparent text-white-500 placeholder:text-gray-400 focus:outline-none sm:text-sm"
              />
              <button className="mt-2 w-full shrink-0 rounded-lg bg-green-500 px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white-500 transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 sm:mt-0 sm:w-auto">
                Sign Up
              </button>
            </div>
          </form>
        </div>

        {/* Main Grid */}
        <div className="mb-12 grid grid-cols-1 gap-12 border-t pt-8 md:grid-cols-3">
          {/* Services */}
          <div className="text-center lg:text-left">
            <h4 className="mb-4 text-lg font-semibold text-white-500">Explore Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                'Adult Day Health Care',
                'Medical Transportation',
                'Nutritious Meals',
                'In-Home Care Support',
                'Activities & Engagement',
                'Our Approach to Safety',
              ].map((item) => (
                <li key={item} className="cursor-pointer transition hover:text-white-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center text-gray-400">
            <span className="text-sm">811 Mt Holly Rd, Fairdale KY, 40118</span>
            <div className="mt-2">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.5790456946583!2d-85.71517728469145!3d38.11333667970592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690a4695555555%3A0x1111111111111111!2s811%20Mt%20Holly%20Rd%2C%20Fairdale%2C%20KY%2040118!5e0!3m2!1sen!2sus!4v1660000000000"
                width="100%"
                height="150"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md border border-gray-600"
              ></iframe>
            </div>
          </div>

          {/* Logo & Social */}
          <div className="text-center">
            <Image src={Logo} alt="Logo" width={75} height={75} className="mx-auto" />
            <p className="mt-4 text-sm text-gray-400">
              We provide compassionate adult day care and in-home support services for families in
              Louisville, KY. Helping individuals live safely, socially, and independently.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              {[
                {
                  icon: <FaFacebookF />,
                  url: 'https://facebook.com',
                  color: 'hover:text-[#1877F2]',
                },
                {
                  icon: <FaInstagram />,
                  url: 'https://instagram.com',
                  color: 'hover:text-[#E1306C]',
                },
                {
                  icon: <FaLinkedinIn />,
                  url: 'https://linkedin.com',
                  color: 'hover:text-[#0A66C2]',
                },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white-500 transition-transform duration-200 hover:scale-110 ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-500 sm:flex sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} Quality Senior Health Care. All rights reserved.
          </span>
          <ul className="mt-4 flex flex-wrap justify-center gap-4 sm:mt-0 sm:justify-end">
            {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-green-500"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
