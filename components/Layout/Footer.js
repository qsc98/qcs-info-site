import Image from 'next/image'
import Link from 'next/link'
import LineIcon from '../misc/LineIcon'
import WaitlistForm from '../WaitlistForm'
import { companyLinks, legalLinks, serviceLinks } from './navLinks'
import SocialLinks from './SocialLinks'
import Wordmark from './Wordmark'
import siteConfig, { fullAddress, hoursSummary, isOpen } from '../../site.config'

const { launch, contact } = siteConfig

const columns = [
  { title: 'Services', links: serviceLinks },
  { title: 'Company', links: companyLinks },
  { title: 'Legal', links: legalLinks },
]

const focus = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

const statusParts = [
  launch.licensed ? 'Licensed by the Commonwealth of Kentucky' : null,
  launch.medicaid === 'enrolling' ? 'Medicaid provider enrollment in progress' : null,
].filter(Boolean)

/** Footer 1 from design/README.md §3.8. */
export default function Footer() {
  const showWaitlist = launch.waitlist && !isOpen
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy leading-[normal] text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 pt-9 pb-[110px] md:gap-9 md:px-10 md:pt-14 md:pb-7">
        <div className="flex flex-wrap justify-between gap-6 md:gap-12">
          <div className="flex flex-[1_1_300px] flex-col gap-3.5">
            <Link href="/" className={`flex items-center gap-2.5 self-start rounded-lg ${focus}`}>
              <span className="flex size-11 items-center justify-center rounded-icon-tile bg-white">
                <Image src="/assets/Logo-Transparent.png" alt="" width={36} height={36} />
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
            <address className="flex items-center gap-2 text-[15px] text-white not-italic">
              <LineIcon name="pin" size={18} className="flex-none text-mint-strong" />
              {fullAddress}
            </address>
            <a
              href={`mailto:${contact.email}`}
              className={`flex items-center gap-2 self-start rounded text-[15px] text-white hover:text-mint-strong ${focus}`}
            >
              <LineIcon name="mail" size={18} className="flex-none text-mint-strong" />
              {contact.email}
            </a>
            {isOpen && contact.phone ? (
              <p className="text-[15px] leading-[normal] text-white">
                <a href={`tel:${contact.phone}`} className={`rounded ${focus}`}>
                  {contact.phoneDisplay}
                </a>{' '}
                · {hoursSummary()}
              </p>
            ) : (
              <p className="text-[14px] leading-[normal] font-semibold text-mint-strong">
                Phone and hours published at opening
              </p>
            )}
            <SocialLinks />
          </div>

          <nav aria-label="Footer" className="flex flex-[2_1_420px] flex-wrap gap-5 md:gap-8">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-[1_1_44%] flex-col gap-2 md:flex-[1_1_160px]">
                <h2 className="bg-none font-display text-[15px] leading-[normal] font-semibold text-white">
                  {col.title}
                </h2>
                <ul className="flex flex-col gap-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className={`rounded text-[15px] text-on-navy-muted hover:text-white ${focus}`}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {showWaitlist ? (
          <div className="flex flex-wrap items-center gap-3.5 rounded-[20px] border border-white/14 bg-white/8 p-4 md:px-[22px] md:py-[18px]">
            <h2 className="flex-[1_1_260px] bg-none font-display text-[17px] leading-[normal] font-semibold text-white">
              Get the one opening email
            </h2>
            <div className="flex-[1_1_320px]">
              <WaitlistForm variant="strip" />
            </div>
          </div>
        ) : null}

        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-white/14 pt-[18px] text-[13px] text-on-navy-faint">
          <span>
            © {year} {siteConfig.legalName}, d/b/a {siteConfig.name}
          </span>
          {statusParts.length ? <span>{statusParts.join(' · ')}</span> : null}
        </div>
      </div>
    </footer>
  )
}
