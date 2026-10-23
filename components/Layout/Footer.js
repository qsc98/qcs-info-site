import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/assets/Logo-Circle.png'
import siteConfig, { fullAddress, hoursSummary } from '../../site.config'
import WaitlistForm from '../WaitlistForm'
import { primaryLinks, serviceLinks } from './navLinks'
import SocialLinks from './SocialLinks'

const Footer = () => {
  const showWaitlist = siteConfig.launch.waitlist && siteConfig.launch.status !== 'open'
  return (
    <footer className="bg-primary text-white-500">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        {showWaitlist ? (
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">Be first to know when we open</h2>
              <p className="mt-4 text-base text-gray-400">{siteConfig.launch.statusLine}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white p-5 text-slate-900">
              <WaitlistForm compact />
            </div>
          </div>
        ) : null}

        <div className="mb-12 grid grid-cols-1 gap-12 border-t border-white/10 pt-10 md:grid-cols-3">
          <nav aria-label="Footer" className="text-center md:text-left">
            <h2 className="mb-4 text-lg font-semibold text-white">Explore</h2>
            <ul className="space-y-2 text-base text-gray-400">
              {[...serviceLinks.slice(1), ...primaryLinks].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-center text-gray-400">
            <h2 className="mb-4 text-lg font-semibold text-white">Visit</h2>
            <address className="text-base not-italic">{fullAddress}</address>
            <p className="mt-2 text-base text-gray-400">Hours: {hoursSummary()}</p>
            <div className="mt-4">
              <iframe
                title={`Map to ${siteConfig.name}`}
                src={siteConfig.address.mapsEmbedUrl}
                width="100%"
                height="150"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md border border-gray-600"
              ></iframe>
            </div>
          </div>

          <div className="text-center">
            <Image src={Logo} alt="" width={75} height={75} className="mx-auto" />
            <p className="mt-4 text-base text-gray-400">
              {siteConfig.name} provides {siteConfig.descriptor.toLowerCase()} and in-home support
              for families in {siteConfig.serviceArea.slice(0, 2).join(' and ')}, Kentucky.
            </p>
            <p className="mt-3 text-base text-gray-400">
              <a href={`mailto:${siteConfig.contact.email}`} className="underline hover:text-white">
                {siteConfig.contact.email}
              </a>
            </p>
            <SocialLinks className="mt-4 justify-center" />
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-500 sm:flex sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </span>
          <ul className="mt-4 flex flex-wrap justify-center gap-4 sm:mt-0 sm:justify-end">
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-white">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
