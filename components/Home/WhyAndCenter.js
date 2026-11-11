import Image from 'next/image'
import { Reveal } from './motion'
import PeopleCircles from './PeopleCircles'
import { Eyebrow, navyButton, SectionTitle } from './SectionHeading'
import siteConfig, { fullAddress } from '../../site.config'
import LineIcon from '../misc/LineIcon'

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

/**
 * §3.6 Why families choose us, and where to find us. Text left and map
 * right on desktop; map first once the columns stack.
 * The map is the illustration for now; a real embed can go behind the same
 * address card later, keeping this image as the no-JS state.
 */
export default function WhyAndCenter() {
  return (
    <section
      id="why"
      className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center gap-5 px-5 py-9 md:gap-14 md:px-10 md:py-[72px]"
    >
      <Reveal className="flex min-w-0 flex-[1_1_440px] flex-col gap-3.5">
        <Eyebrow>Why us</Eyebrow>
        <SectionTitle accent="and where to find us">Why families choose us, </SectionTitle>
        <p className="m-0 flex items-center gap-3 pb-1 leading-[normal]">
          <PeopleCircles />
          <span className="font-display text-[17px] font-semibold text-navy md:text-[19px]">
            The people behind it
          </span>
        </p>
        <ol className="flex flex-col">
          {reasons.map((r, i) => (
            <li key={r.title} className="flex items-start gap-3.5 border-t border-line py-3.5">
              <span
                aria-hidden="true"
                className="w-[30px] flex-none pt-[3px] font-display text-[16px] font-semibold text-teal"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex flex-col gap-[3px]">
                <span className="font-display text-[18px] font-semibold text-navy md:text-[20px]">
                  {r.title}
                </span>
                <span className="text-[15px] leading-normal text-text-muted">{r.line}</span>
              </span>
            </li>
          ))}
        </ol>
        <p className="m-0 border-t border-line pt-4 text-[16px] leading-[1.55] font-semibold text-navy md:text-[17px]">
          All of it happens in one bright, step-free building on Mt Holly Road, minutes from South
          Louisville, with a kitchen that cooks on site and vans that load at the door. Come see it.
        </p>
        <a href="#waitlist" className={`${navyButton} inline-flex self-start`}>
          Request a tour at opening
        </a>
      </Reveal>

      <Reveal
        id="center"
        delay={0.15}
        className="relative order-first min-w-0 flex-[1_1_460px] lg:order-none"
      >
        <span className="relative block aspect-[4/3] overflow-hidden rounded-[28px] md:aspect-square">
          <Image
            src="/illustrations/map.svg"
            alt={`Map showing the center on ${siteConfig.address.street.replace(/^\d+\s+/, '')} in ${siteConfig.address.city}`}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
        </span>
        <span className="absolute inset-x-4 bottom-4 flex items-center gap-3.5 rounded-card-small bg-white px-4 py-3.5 shadow-card-light">
          <span className="flex size-11 flex-none items-center justify-center rounded-icon-tile bg-mint text-teal">
            <LineIcon name="pin" size={22} />
          </span>
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
      </Reveal>
    </section>
  )
}
