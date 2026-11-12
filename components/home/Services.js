import ServiceCard from '@/components/services/ServiceCard'
import Chip from '@/components/ui/Chip'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionIntro from '@/components/ui/SectionIntro'
import { Accent } from '@/components/ui/SectionTitle'
import services from '@/content/services'
import siteConfig, { hoursLabel } from '@/site.config'

const facts = [
  `Hours: ${hoursLabel()}`,
  `Medicaid: ${siteConfig.launch.medicaid === 'enrolling' ? 'enrollment in progress' : 'accepted'}`,
  'Private pay · LTC · VA',
]

/** §3.3 Four services, one team. Each card links to its service page. */
export default function Services() {
  return (
    <Section id="services" className="flex flex-col gap-4 md:gap-8">
      <Reveal>
        <SectionIntro
          wide
          eyebrow="Services"
          title={
            <>
              Four services, <Accent>one team</Accent>
            </>
          }
        >
          Start with what is needed today. Add the rest when it helps; the same team runs all four.
        </SectionIntro>
      </Reveal>
      <Reveal as="ul" delay={0.1} aria-label="At a glance" className="flex flex-wrap gap-2.5">
        {facts.map((fact) => (
          <Chip as="li" key={fact}>
            {fact}
          </Chip>
        ))}
      </Reveal>
      <ul className="flex flex-wrap gap-3 md:gap-5">
        {services.map((service, i) => (
          <Reveal
            as="li"
            key={service.key}
            delay={(i % 2) * 0.15}
            className="flex min-w-0 flex-[1_1_100%] md:flex-[1_1_480px]"
          >
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
