import ServiceCard from '@/components/services/ServiceCard'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionIntro from '@/components/ui/SectionIntro'
import { Accent } from '@/components/ui/SectionTitle'
import services from '@/content/services'
import cx from '@/lib/cx'

/**
 * The services as linked cards; pass `exclude` (a service key) to leave out
 * the page you are on. Three or four across on desktop.
 */
export default function OtherServices({ exclude, title }) {
  const shown = services.filter((service) => service.key !== exclude)
  return (
    <Section className="flex flex-col gap-6 md:gap-8">
      <Reveal>
        <SectionIntro
          eyebrow="One team"
          wide
          title={
            title ?? (
              <>
                The rest of <Accent>the care</Accent>
              </>
            )
          }
        >
          The same team runs all four services, so adding one later is a conversation, not a new
          provider.
        </SectionIntro>
      </Reveal>
      <ul
        className={cx(
          'grid gap-3 sm:grid-cols-2 md:gap-5',
          shown.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
        )}
      >
        {shown.map((service, i) => (
          <Reveal as="li" key={service.key} delay={i * 0.1}>
            <ServiceCard service={service} layout="stacked" />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
