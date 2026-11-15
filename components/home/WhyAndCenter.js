import PeopleCircles from '@/components/home/PeopleCircles'
import CenterMap from '@/components/sections/CenterMap'
import { ButtonLink } from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import NumberedList from '@/components/ui/NumberedList'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionTitle, { Accent } from '@/components/ui/SectionTitle'

const reasons = [
  {
    title: 'A small licensed team that knows every name',
    text: 'Licensed by the Commonwealth of Kentucky. Small enough that the nurse knows how your person takes their coffee.',
  },
  {
    title: 'A nurse on site and a family kept in the loop',
    text: 'Daily wellness checks, medication oversight, and a call or note home when something changes.',
  },
  {
    title: 'The paperwork handled for you',
    text: 'Medicaid waivers, long-term care insurance, veterans benefits, transportation. We help with all of it.',
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
        <NumberedList items={reasons} />
        <p className="border-t border-line pt-4 type-body font-semibold text-navy">
          All of it happens in one bright, step-free building on Mt Holly Road, minutes from South
          Louisville, with a kitchen that cooks on site and vans that load at the door. Come see it.
        </p>
        <ButtonLink href="/about-us" className="self-start">
          Learn more about us
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
