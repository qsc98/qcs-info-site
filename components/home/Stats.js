import Image from 'next/image'
import { ButtonLink } from '@/components/ui/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import Float from '@/components/ui/Float'
import IconTile from '@/components/ui/IconTile'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionTitle, { Accent } from '@/components/ui/SectionTitle'

// Carried over from the previous site. TODO before launch: cite each figure.
const stats = [
  {
    value: '33',
    suffix: '%',
    label: 'Social connection',
    line: 'of adults 45+ report feeling lonely. Our programs foster real connection.',
    icon: 'people',
    position: 'xl:top-14 xl:left-12',
    tilt: -3,
  },
  {
    value: '78',
    suffix: '%',
    label: 'Caregiver relief',
    line: 'of caregivers feel emotionally better with just 4 hours a week of respite.',
    icon: 'heart',
    position: 'xl:top-[90px] xl:right-12',
    tilt: 2,
  },
  {
    value: '5',
    suffix: 'x',
    label: 'Cost advantage',
    line: 'less expensive than a full-time nursing home, with equal compassion.',
    icon: 'clipboard',
    position: 'xl:bottom-14 xl:left-[110px]',
    tilt: -2,
  },
  {
    value: '74',
    suffix: '%',
    label: 'Age in place',
    line: 'of seniors remain living at home with the support of adult day services.',
    icon: 'house',
    position: 'xl:right-[90px] xl:bottom-[70px]',
    tilt: 3,
  },
]

/**
 * §3.4 Care that adds up. From 1280px the cards float around the centre
 * block; narrower, they would overlap its 520px column, so they sit in a
 * grid below it instead.
 */
export default function Stats() {
  return (
    <Section id="benefits" spacing="panel">
      <div className="relative flex flex-col gap-[18px] overflow-hidden rounded-panel-mobile-small bg-mint px-[18px] py-7 md:rounded-panel md:p-10 xl:block xl:p-0">
        <Reveal className="relative mx-auto flex max-w-[520px] flex-col items-center gap-2.5 text-center md:gap-3.5 xl:pt-24 xl:pb-[110px]">
          <span className="relative hidden size-[162px] overflow-hidden rounded-full border-[6px] border-white shadow-avatar xl:block">
            <Image
              src="/illustrations/craft.svg"
              alt=""
              fill
              sizes="150px"
              className="object-cover"
            />
          </span>
          <Eyebrow>The research agrees</Eyebrow>
          <SectionTitle>
            Care that <Accent>adds up.</Accent>
          </SectionTitle>
          <p className="type-body text-text-muted">
            Adult day services are among the best-studied ways to keep someone at home longer and
            give the family room to breathe.
            <span className="hidden xl:inline">
              {' '}
              The numbers around this page are from published U.S. research.
            </span>
          </p>
          <ButtonLink href="#waitlist" className="mt-1.5 hidden xl:inline-flex">
            Join the opening waitlist
          </ButtonLink>
        </Reveal>

        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 xl:contents">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </ul>

        <p className="text-center text-[13px] text-text-faint md:text-[14px] xl:hidden">
          Figures from published U.S. research on adult day services and family caregiving.
        </p>
      </div>
    </Section>
  )
}

function StatCard({ stat, index }) {
  return (
    <Float
      as="li"
      tilt={stat.tilt}
      delay={index * 0.7}
      popDelay={index * 0.15}
      className={`flex flex-col gap-1.5 rounded-card-md bg-white px-5 py-[18px] shadow-float-light xl:absolute xl:w-[250px] ${stat.position}`}
    >
      <span className="flex items-center gap-2.5">
        <IconTile name={stat.icon} />
        <span className="font-display text-[40px] leading-none font-bold tracking-[-0.03em] text-navy">
          {stat.value}
          <span className="text-[0.5em] text-teal">{stat.suffix}</span>
        </span>
      </span>
      <span className="font-display text-[17px] font-semibold text-navy">{stat.label}</span>
      <span className="text-[14px] leading-[1.45] text-text-muted">{stat.line}</span>
    </Float>
  )
}
