import { pageMetadata } from '../../lib/seo'
import siteConfig, { fullAddress } from '../../site.config'

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: `How ${siteConfig.name} collects and uses information on this website.`,
  path: '/privacy-policy',
})

const effectiveDate = 'October 23, 2026'

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pt-36 pb-16 sm:pt-40">
      <h1 className="text-4xl sm:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-500">Effective {effectiveDate}</p>

      <div className="prose prose-slate mt-10 max-w-none text-lg [&_h2]:mt-10 [&_h2]:text-2xl [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
        <p>
          {siteConfig.legalName}, doing business as {siteConfig.name} (“we”, “us”), operates this website to describe our {siteConfig.descriptor} services at {fullAddress}. This policy explains what information the website collects and how we use it.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Waitlist and contact forms.</strong> If you submit a form, we receive what you type: typically your name, email address, optional phone number, and your message. Forms are processed by our hosting provider, Netlify, and delivered to us by email.
          </li>
          <li>
            <strong>Email.</strong> If you email us at {siteConfig.contact.email}, we keep that correspondence to respond to you.
          </li>
          <li>
            <strong>Technical data.</strong> Our hosting provider records standard server logs (IP address, browser type, pages requested) to operate and secure the site. We do not run analytics or advertising trackers and we do not set cookies of our own.
          </li>
        </ul>

        <h2>Please do not send health information</h2>
        <p>
          This website is for general information and scheduling only. Please do not include medical history, diagnoses, medications, insurance or Medicaid identifiers, or other protected health information in any web form or email. If we need health information to plan care, we will collect it through a secure intake process after you contact us.
        </p>

        <h2>How we use information</h2>
        <ul>
          <li>To respond to your inquiry or add you to our opening waitlist.</li>
          <li>To tell you when we open and how to enroll, if you asked us to.</li>
          <li>To operate, secure and improve the website.</li>
        </ul>
        <p>We do not sell personal information and we do not share it with third parties for their own marketing.</p>

        <h2>Third-party services</h2>
        <p>
          Pages on this site embed Google Maps and load fonts from Google. Those services may receive your IP address and set their own cookies under Google’s privacy policy. Form submissions are processed by Netlify under Netlify’s privacy policy.
        </p>

        <h2>Retention and your choices</h2>
        <p>
          We keep waitlist and inquiry details until we have responded and, for waitlist entries, until we have announced our opening. You can ask us to delete your information at any time by emailing {siteConfig.contact.email}.
        </p>

        <h2>Children</h2>
        <p>This website is intended for adults. We do not knowingly collect information from children under 13.</p>

        <h2>Changes and contact</h2>
        <p>
          We may update this policy as our services launch; the effective date above will change when we do. Questions: {siteConfig.contact.email}, or write to {siteConfig.legalName}, {fullAddress}.
        </p>
      </div>
    </article>
  )
}
