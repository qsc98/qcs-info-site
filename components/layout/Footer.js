import Link from 'next/link'
import WaitlistForm from '@/components/forms/WaitlistForm'
import SocialLinks from '@/components/layout/SocialLinks'
import Wordmark from '@/components/layout/Wordmark'
import Icon from '@/components/ui/Icon'
import Logo from '@/components/ui/Logo'
import { companyLinks, legalLinks, serviceLinks } from '@/lib/navigation'
import siteConfig, { fullAddress, hoursSummary, isOpen, statusNotes } from '@/site.config'

const { launch, contact } = siteConfig

const columns = [
  { title: 'Services', links: serviceLinks },
  { title: 'Company', links: companyLinks },
  { title: 'Legal', links: legalLinks },
]

/** Footer 1 (design/README.md §3.8). Every business fact comes from site.config. */
export default function Footer() {
  const showWaitlist = launch.waitlist && !isOpen
  const notes = statusNotes()

  return (
    <footer className="bg-navy text-white">
      {/* The 110px phone bottom padding clears the home sticky bar. */}
      <div className="mx-auto flex max-w-page flex-col gap-6 px-5 pt-9 pb-[110px] md:gap-9 md:px-10 md:pt-14 md:pb-7">
        <div className="flex flex-wrap justify-between gap-6 md:gap-12">
          <div className="flex flex-[1_1_300px] flex-col gap-3.5">
            <Link
              href="/"
              className="flex items-center gap-2.5 self-start rounded-lg focus-ring-inverse"
            >
              <span className="flex size-11 items-center justify-center rounded-icon-tile bg-white">
                <Logo className="size-9" />
              </span>
              <Wordmark
                breakClassName=""
                className="font-display text-[18px] leading-[1.1] font-bold text-white"
              />
            </Link>
            <p className="max-w-[340px] text-[15px] leading-[1.55] text-on-navy-muted">
              Licensed adult day health care, in-home care, medical transportation and nutritious
              meals for {siteConfig.address.city} and South Louisville.
              {isOpen ? '' : ` ${launch.statusShort}.`}
            </p>
            <address className="flex items-center gap-2 text-[15px] not-italic">
              <Icon name="pin" size={18} className="flex-none text-mint-strong" />
              {fullAddress}
            </address>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 self-start rounded text-[15px] focus-ring-inverse hover:text-mint-strong"
            >
              <Icon name="mail" size={18} className="flex-none text-mint-strong" />
              {contact.email}
            </a>
            {isOpen && contact.phone ? (
              <p className="text-[15px]">
                <a href={`tel:${contact.phone}`} className="rounded focus-ring-inverse">
                  {contact.phoneDisplay}
                </a>{' '}
                · {hoursSummary()}
              </p>
            ) : (
              <p className="text-[14px] font-semibold text-mint-strong">
                Phone and hours published at opening
              </p>
            )}
            <SocialLinks />
          </div>

          <nav aria-label="Footer" className="flex flex-[2_1_420px] flex-wrap gap-5 md:gap-8">
            {columns.map((column) => (
              <div
                key={column.title}
                className="flex flex-[1_1_44%] flex-col gap-2 md:flex-[1_1_160px]"
              >
                <h2 className="font-display text-[15px] font-semibold">{column.title}</h2>
                <ul className="flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded text-[15px] text-on-navy-muted focus-ring-inverse hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {showWaitlist ? (
          <div className="flex flex-wrap items-center gap-3.5 rounded-card-md border border-white/14 bg-white/8 p-4 md:px-[22px] md:py-[18px]">
            <h2 className="flex-[1_1_260px] font-display text-[17px] font-semibold">
              Get the one opening email
            </h2>
            <div className="flex-[1_1_320px]">
              <WaitlistForm layout="strip" />
            </div>
          </div>
        ) : null}

        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-white/14 pt-[18px] text-[13px] text-on-navy-faint">
          <span>
            © {new Date().getFullYear()} {siteConfig.legalName}, d/b/a {siteConfig.name}
          </span>
          {notes.length ? <span>{notes.join(' · ')}</span> : null}
        </div>
      </div>
    </footer>
  )
}
