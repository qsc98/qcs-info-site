import LegalPage from '@/components/sections/LegalPage'
import { pageMetadata } from '@/lib/seo'
import siteConfig, { fullAddress } from '@/site.config'

export const metadata = pageMetadata({
  title: 'Terms of Use',
  description: `Terms for using the ${siteConfig.name} website.`,
  path: '/terms-of-service',
})

export default function TermsPage() {
  const { legalName, name, contact } = siteConfig
  return (
    <LegalPage title="Terms of Use" effective="October 23, 2026">
      <p>
        By using this website you agree to these terms. The site is operated by {legalName}, doing
        business as {name}, {fullAddress}.
      </p>
      <h2>Informational purpose</h2>
      <p>
        Content on this site describes services we offer or plan to offer. It is general
        information, not medical, legal or financial advice, and it does not create a care or
        provider relationship. Decisions about care should be made with your physician and care
        team.
      </p>
      <h2>Service availability</h2>
      <p>
        Services, hours, eligibility, pricing and accepted payment sources may change, and some
        described services may not be available until we are fully operational and enrolled with
        each payer. Statements about Medicaid or insurance coverage are not a guarantee of coverage;
        eligibility is determined by the payer.
      </p>
      <h2>Not for emergencies</h2>
      <p>
        Do not use this website, its forms or email for urgent or emergency needs. In an emergency,
        call 911.
      </p>
      <h2>Acceptable use</h2>
      <p>
        You agree not to misuse the site, attempt to access it in unauthorized ways, submit false
        information, or interfere with its operation.
      </p>
      <h2>Intellectual property</h2>
      <p>
        Text, graphics and logos on this site belong to {legalName} or their respective owners and
        may not be reused without permission.
      </p>
      <h2>Third-party links and embeds</h2>
      <p>
        We are not responsible for the content or practices of third-party sites and services linked
        or embedded here.
      </p>
      <h2>Disclaimer and limitation</h2>
      <p>
        The site is provided “as is”. To the fullest extent permitted by law, we disclaim warranties
        of accuracy or fitness and are not liable for damages arising from use of the site.
      </p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the Commonwealth of Kentucky.</p>
      <h2>Contact</h2>
      <p>Questions about these terms: {contact.email}.</p>
    </LegalPage>
  )
}
