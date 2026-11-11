import Image from 'next/image'
import PeopleCircles from '@/components/home/PeopleCircles'
import { ButtonLink } from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import IconTile from '@/components/ui/IconTile'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionTitle, { Accent } from '@/components/ui/SectionTitle'
import siteConfig, { fullAddress } from '@/site.config'

const reasons = [
  {
    title: 'A small licensed team that knows every name',
    line: 'Licensed by the Commonwealth of Kentucky. Small enough that the nurse knows how your person takes their coffee.',
  },
  {
    title: 'A nurse on site and a family kept in the loop',
    line: 'Daily wellness checks, medication oversight, and a call or note home when something changes.',
  },
  {
    title: 'The paperwork handled for you',
    line: 'Medicaid waivers, long-term care insurance, veterans benefits, transportation. We help with all of it.',
  },
]

/** §3.6 Why families choose us, and where to find us. Map first once the columns stack. */
export default function WhyAndCenter() {
  return (
    <Section id="why" className="flex flex-wrap items-center gap-5 md:gap-14">
      <Reveal className="flex min-w-0 flex-[1_1_440px] flex-col gap-3.5">
        <Eyebrow>Why us</Eyebrow>
        <SectionTitle>
          Why families choose us, <Accent>and where to find us</Accent>
        </SectionTitle>
        <p className="flex items-center gap-3 pb-1">
          <PeopleCircles />
          <span className="font-display text-[17px] font-semibold text-navy md:text-[19px]">
            The people behind it
          </span>
        </p>
        <ol className="flex flex-col">
          {reasons.map((reason, i) => (
            <li key={reason.title} className="flex items-start gap-3.5 border-t border-line py-3.5">
              <span
                aria-hidden="true"
                className="w-[30px] flex-none pt-[3px] font-display text-[16px] font-semibold text-teal"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex flex-col gap-[3px]">
                <span className="type-title-sm text-navy">{reason.title}</span>
                <span className="text-[15px] leading-normal text-text-muted">{reason.line}</span>
              </span>
            </li>
          ))}
        </ol>
        <p className="border-t border-line pt-4 type-body font-semibold text-navy">
          All of it happens in one bright, step-free building on Mt Holly Road, minutes from South
          Louisville, with a kitchen that cooks on site and vans that load at the door. Come see it.
        </p>
        <ButtonLink href="#waitlist" className="self-start">
          Request a tour at opening
        </ButtonLink>
      </Reveal>

      <Reveal
        id="center"
        delay={0.15}
        className="relative order-first min-w-0 flex-[1_1_460px] lg:order-none"
      >
        <CenterMap />
      </Reveal>
    </Section>
  )
}

/**
 * The map illustration with the address card. A live map embed can later
 * sit behind the same card, keeping this image as the no-JS state.
 */
function CenterMap() {
  return (
    <>
      <span className="relative block aspect-[4/3] overflow-hidden rounded-block md:aspect-square">
        <Image
          src="/illustrations/map.svg"
          alt={`Map showing our center at ${fullAddress}`}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
        />
      </span>
      <span className="absolute inset-x-4 bottom-4 flex items-center gap-3.5 rounded-card-small bg-white px-4 py-3.5 shadow-card-light">
        <IconTile name="pin" size="md" />
        <span className="flex min-w-0 flex-col gap-0.5">
          <span className="font-display text-[15px] font-semibold text-navy md:text-[17px]">
            Our center in {siteConfig.address.city}
          </span>
          <address className="text-[13px] text-text-muted not-italic md:text-[14px]">
            {fullAddress}
          </address>
          <span className="text-[13px] font-bold text-teal">Tours begin when we open →</span>
        </span>
      </span>
    </>
  )
}
