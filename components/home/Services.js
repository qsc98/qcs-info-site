import Image from 'next/image'
import Link from 'next/link'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionTitle, { Accent } from '@/components/ui/SectionTitle'
import services from '@/lib/services'
import siteConfig, { hoursSummary } from '@/site.config'

const facts = [
  `Hours: ${siteConfig.hours ? hoursSummary() : 'to be announced'}`,
  `Medicaid: ${siteConfig.launch.medicaid === 'enrolling' ? 'enrollment in progress' : 'accepted'}`,
  'Private pay · LTC · VA',
]

/** §3.3 Four services, one team. Each card links to its service page. */
export default function Services() {
  return (
    <Section id="services" className="flex flex-col gap-4 md:gap-8">
      <Reveal className="flex max-w-[640px] flex-col gap-2.5">
        <Eyebrow>Services</Eyebrow>
        <SectionTitle>
          Four services, <Accent>one team</Accent>
        </SectionTitle>
        <p className="type-body text-text-muted">
          Start with what is needed today. Add the rest when it helps; the same team runs all four.
        </p>
      </Reveal>
      <Reveal as="ul" delay={0.1} aria-label="At a glance" className="flex flex-wrap gap-2.5">
        {facts.map((fact) => (
          <li
            key={fact}
            className="rounded-pill border border-line bg-white px-[11px] py-[7px] text-[13px] font-semibold text-navy md:px-3 md:py-2 md:text-[14px]"
          >
            {fact}
          </li>
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

function ServiceCard({ service }) {
  return (
    <Link
      href={service.href}
      className="flex w-full items-center gap-4 rounded-card border border-line bg-white p-3.5 focus-ring transition-shadow hover:shadow-float-light"
    >
      <span className="relative aspect-[4/3] w-[110px] flex-none overflow-hidden rounded-thumb md:w-[180px]">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 768px) 180px, 110px"
          className="object-cover"
        />
      </span>
      <span className="flex min-w-0 flex-col gap-1">
        <span className="font-display text-[15px] font-semibold text-teal">{service.number}</span>
        <span className="type-card-title text-navy">{service.title}</span>
        <span className="type-card-line text-text-muted">{service.line}</span>
      </span>
    </Link>
  )
}
