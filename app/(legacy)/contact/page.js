import {
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from 'react-icons/hi'
import SocialLinks from '@/components/layout/SocialLinks'
import ContactForm from '@/components/legacy/ContactForm'
import LottieFigure from '@/components/legacy/LottieFigure'
import { pageMetadata } from '@/lib/seo'
import siteConfig, { fullAddress, hoursSummary, isOpen } from '@/site.config'

export const metadata = pageMetadata({
  title: isOpen ? 'Contact Us' : 'Contact & Waitlist',
  description: `Join the opening waitlist or email ${siteConfig.name}, an ${siteConfig.descriptor} center at ${fullAddress}.`,
  path: '/contact',
})

const InfoRow = ({ Icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
      <Icon className="size-6" aria-hidden="true" />
    </div>
    <div>
      <h2 className="text-lg font-semibold text-navy">{title}</h2>
      {children}
    </div>
  </div>
)

export default function Contact() {
  return (
    <div className="relative w-full overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20 lg:pb-24">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/assets/honeycomb-background.jpg')" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 xl:px-16">
        <div className="mb-12 text-center">
          <h1 className="font-jakarta text-3xl leading-tight font-extrabold text-navy sm:text-5xl">
            {isOpen ? 'Get in Touch' : 'Get in Touch & Join the Waitlist'}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            {isOpen ? 'We’re here to help you and your loved ones.' : siteConfig.launch.statusLine}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <LottieFigure
                src="/assets/Contact-Us.lottie"
                loop
                className="mx-auto mb-8 h-64 w-full sm:h-80"
              />

              <div className="space-y-6">
                <InfoRow Icon={HiOutlineMail} title="Email us">
                  <p className="text-base text-slate-600">
                    For general questions and partnership inquiries.
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="mt-1 block text-base font-medium text-green-600 underline underline-offset-4 hover:text-green-700"
                  >
                    {siteConfig.contact.email}
                  </a>
                </InfoRow>

                <InfoRow Icon={HiOutlineLocationMarker} title="Visit us">
                  <p className="text-base text-slate-600">
                    {isOpen
                      ? 'Tours available by appointment.'
                      : 'Tours will be available once we open.'}
                  </p>
                  <address className="mt-1 text-base font-medium text-slate-800 not-italic">
                    {fullAddress}
                  </address>
                </InfoRow>

                <InfoRow Icon={HiOutlineClock} title="Hours">
                  <p className="text-base text-slate-600">
                    {siteConfig.hours ? hoursSummary() : siteConfig.hoursNote}
                  </p>
                </InfoRow>

                <InfoRow Icon={HiOutlinePhone} title="Call us">
                  {siteConfig.contact.phone ? (
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="mt-1 block text-base font-medium text-green-600 underline underline-offset-4 hover:text-green-700"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  ) : (
                    <p className="text-base text-slate-600">
                      Our phone line opens with the center. Join the waitlist and we’ll send the
                      number with our opening announcement.
                    </p>
                  )}
                </InfoRow>
              </div>

              <SocialLinks className="mt-8 border-t border-slate-100 pt-6" />
            </div>
          </div>

          <div className="h-full" id="contact-form">
            <div className="h-full rounded-2xl border border-slate-100 bg-white p-8 shadow-xl lg:p-12">
              <h2 className="mb-2 text-2xl font-bold text-navy">
                {isOpen ? 'Send us a message' : 'Be the first to know when we open'}
              </h2>
              <p className="mb-8 text-base text-slate-600">
                {isOpen
                  ? 'Fill out the form below and we’ll get back to you shortly.'
                  : 'Leave your email and we’ll tell you the opening date, how to enroll, and how Medicaid or private pay will work.'}
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
