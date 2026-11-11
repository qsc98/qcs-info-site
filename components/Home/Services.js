import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from './motion'
import { bodyText, Eyebrow, lightFocus, SectionTitle } from './SectionHeading'
import services from '../../lib/services'
import siteConfig from '../../site.config'

const chips = [
  `Hours: ${siteConfig.hours ? siteConfig.hours.map((h) => `${h.label} ${h.opensDisplay}–${h.closesDisplay}`).join(', ') : 'to be announced'}`,
  siteConfig.launch.medicaid === 'enrolling'
    ? 'Medicaid: enrollment in progress'
    : 'Medicaid: accepted',
  'Private pay · LTC · VA',
]

/** §3.3 Four services, one team. */
export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-5 py-9 md:gap-8 md:px-10 md:py-[72px]"
    >
      <Reveal className="flex max-w-[640px] flex-col gap-2.5">
        <Eyebrow>Services</Eyebrow>
        <SectionTitle accent="one team">Four services, </SectionTitle>
        <p className={bodyText}>
          Start with what is needed today. Add the rest when it helps; the same team runs all four.
        </p>
      </Reveal>
      <Reveal as="ul" delay={0.1} aria-label="At a glance" className="flex flex-wrap gap-2.5">
        {chips.map((chip) => (
          <li
            key={chip}
            className="rounded-pill border border-line bg-white px-[11px] py-[7px] text-[13px] font-semibold text-navy md:px-3 md:py-2 md:text-[14px]"
          >
            {chip}
          </li>
        ))}
      </Reveal>
      <ul className="flex flex-wrap gap-3 md:gap-5">
        {services.map((s, i) => (
          <Reveal
            as="li"
            key={s.key}
            delay={(i % 2) * 0.15}
            className="flex min-w-0 flex-[1_1_100%] md:flex-[1_1_480px]"
          >
            <Link
              href={s.href}
              className={`flex w-full items-center gap-4 rounded-card border border-line bg-white p-3.5 text-navy transition-shadow hover:shadow-float-light ${lightFocus}`}
            >
              <span className="relative aspect-[4/3] w-[110px] flex-none overflow-hidden rounded-[14px] md:w-[180px]">
                <Image src={s.image} alt="" fill sizes="(min-width: 768px) 180px, 110px" className="object-cover" />
              </span>
              <span className="flex min-w-0 flex-col gap-1">
                <span className="font-display text-[15px] font-semibold text-teal">{s.number}</span>
                <span className="font-display text-[20px] font-semibold text-navy md:text-[22px]">
                  {s.title}
                </span>
                <span className="text-[15px] leading-[1.45] text-text-muted">{s.line}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
