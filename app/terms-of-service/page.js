import { pageMetadata } from '../../lib/seo'
import siteConfig, { fullAddress } from '../../site.config'

export const metadata = pageMetadata({
  title: 'Terms of Use',
  description: `Terms for using the ${siteConfig.name} website.`,
  path: '/terms-of-service',
})

const effectiveDate = 'October 23, 2026'

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pt-36 pb-16 sm:pt-40">
      <h1 className="text-4xl sm:text-5xl">Terms of Use</h1>
      <p className="mt-4 text-sm text-slate-500">Effective {effectiveDate}</p>

      <div className="mt-10 text-lg [&_h2]:mt-10 [&_h2]:text-2xl [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
        <p>
          By using this website you agree to these terms. The site is operated by {siteConfig.legalName}, {fullAddress}.
        </p>

        <h2>Informational purpose</h2>
        <p>
          Content on this site describes services we offer or plan to offer. It is general information, not medical, legal or financial advice, and it does not create a care or provider relationship. Decisions about care should be made with your physician and care team.
        </p>

        <h2>Service availability</h2>
        <p>
          Services, hours, eligibility, pricing and accepted payment sources may change, and some described services may not be available until we are fully operational and enrolled with each payer. Statements about Medicaid or insurance coverage are not a guarantee of coverage; eligibility is determined by the payer.
        </p>

        <h2>Not for emergencies</h2>
        <p>Do not use this website, its forms or email for urgent or emergency needs. In an emergency, call 911.</p>

        <h2>Acceptable use</h2>
        <p>
          You agree not to misuse the site, attempt to access it in unauthorized ways, submit false information, or interfere with its operation.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Text, graphics and logos on this site belong to {siteConfig.legalName} or their respective owners and may not be reused without permission.
        </p>

        <h2>Third-party links and embeds</h2>
        <p>We are not responsible for the content or practices of third-party sites and services linked or embedded here.</p>

        <h2>Disclaimer and limitation</h2>
        <p>
          The site is provided “as is”. To the fullest extent permitted by law, we disclaim warranties of accuracy or fitness and are not liable for damages arising from use of the site.
        </p>

        <h2>Governing law</h2>
        <p>These terms are governed by the laws of the Commonwealth of Kentucky.</p>

        <h2>Contact</h2>
        <p>Questions about these terms: {siteConfig.contact.email}.</p>
      </div>
    </article>
  )
}
