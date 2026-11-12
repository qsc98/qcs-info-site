import LegalPage from '@/components/sections/LegalPage'
import { pageMetadata } from '@/lib/seo'
import siteConfig, { fullAddress } from '@/site.config'

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: `How ${siteConfig.name} collects and uses information on this website.`,
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  const { legalName, name, descriptor, contact } = siteConfig
  return (
    <LegalPage title="Privacy Policy" effective="November 11, 2026">
      <p>
        {legalName}, doing business as {name} (“we”, “us”), operates this website to describe our{' '}
        {descriptor} services at {fullAddress}. This policy explains what information the website
        collects and how we use it.
      </p>
      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Waitlist and contact forms.</strong> If you submit a form, we receive what you
          type: typically your name, email address, optional phone number, and your message. Forms
          are processed by our hosting provider, Netlify, and delivered to us by email.
        </li>
        <li>
          <strong>Email.</strong> If you email us at {contact.email}, we keep that correspondence to
          respond to you.
        </li>
        <li>
          <strong>Technical data.</strong> Our hosting provider records standard server logs (IP
          address, browser type, pages requested) to operate and secure the site. We do not run
          analytics or advertising trackers and we do not set cookies of our own.
        </li>
      </ul>
      <h2>Please do not send health information</h2>
      <p>
        This website is for general information and scheduling only. Please do not include medical
        history, diagnoses, medications, insurance or Medicaid identifiers, or other protected
        health information in any web form or email. If we need health information to plan care, we
        will collect it through a secure intake process after you contact us.
      </p>
      <h2>How we use information</h2>
      <ul>
        <li>To respond to your inquiry or add you to our opening waitlist.</li>
        <li>To tell you when we open and how to enroll, if you asked us to.</li>
        <li>To operate, secure and improve the website.</li>
      </ul>
      <p>
        We do not sell personal information and we do not share it with third parties for their own
        marketing.
      </p>
      <h2>Third-party services</h2>
      <p>
        Fonts and images are served from this website. The contact page shows a Google Maps map of
        our center, which loads from Google, so Google receives your IP address and browser details
        when you open that page; Google’s privacy policy applies. Other pages do not load content
        from Google or other third parties. “Get directions” links open Google Maps in a new tab.
        Form submissions are processed by Netlify under Netlify’s privacy policy.
      </p>
      <h2>Retention and your choices</h2>
      <p>
        We keep waitlist and inquiry details until we have responded and, for waitlist entries,
        until we have announced our opening. You can ask us to delete your information at any time
        by emailing {contact.email}.
      </p>
      <h2>Children</h2>
      <p>
        This website is intended for adults. We do not knowingly collect information from children
        under 13.
      </p>
      <h2>Changes and contact</h2>
      <p>
        We may update this policy as our services launch; the effective date above will change when
        we do. Questions: {contact.email}, or write to {legalName}, {fullAddress}.
      </p>
    </LegalPage>
  )
}
