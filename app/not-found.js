import OtherServices from '@/components/sections/OtherServices'
import { ButtonLink } from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import Section from '@/components/ui/Section'
import { Accent } from '@/components/ui/SectionTitle'

export const metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <>
      <Section spacing="none" className="px-5 pt-[110px] md:px-10 md:pt-[150px]">
        <div className="flex max-w-[640px] flex-col gap-4">
          <Eyebrow>Page not found</Eyebrow>
          <h1 className="type-h1 text-navy">We can’t find that page</h1>
          <p className="type-body text-text-muted">
            The link may be out of date. Try the home page, or one of our services below.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href="/">Go to the home page</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact us
            </ButtonLink>
          </div>
        </div>
      </Section>
      <OtherServices
        title={
          <>
            Looking for <Accent>a service?</Accent>
          </>
        }
      />
    </>
  )
}
