import CenterMap from '@/components/sections/CenterMap'
import Faq from '@/components/sections/Faq'
import OtherServices from '@/components/sections/OtherServices'
import PageHero from '@/components/sections/PageHero'
import { ButtonLink } from '@/components/ui/Button'
import CardGrid from '@/components/ui/CardGrid'
import CheckList from '@/components/ui/CheckList'
import NumberedList from '@/components/ui/NumberedList'
import Panel from '@/components/ui/Panel'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionIntro from '@/components/ui/SectionIntro'
import { Accent } from '@/components/ui/SectionTitle'
import { pageMetadata } from '@/lib/seo'
import siteConfig, { directionsUrl, fullAddress, hoursLabel, isOpen } from '@/site.config'

export const metadata = pageMetadata({
  title: 'Our Center: Location and Tours',
  description: `Visit our adult day health care center at ${fullAddress}: accessibility, a sample day, what is inside and how to plan a tour.`,
  path: '/our-center',
})

const highlights = [
  {
    icon: 'shield',
    title: 'Safety first',
    text: 'Controlled entry, a fall-aware layout and staff in every room.',
  },
  {
    icon: 'heart',
    title: 'Compassionate care',
    text: 'People who see, hear and honor every participant.',
  },
  {
    icon: 'meal',
    title: 'Nutritious menus',
    text: 'Meals and snacks shaped around diets and cultural favorites.',
  },
  {
    icon: 'sparkle',
    title: 'Enrichment and joy',
    text: 'Music, crafts, brain games and social time to keep spirits high.',
  },
  {
    icon: 'people',
    title: 'Wellness support',
    text: 'Chair yoga, stretching and guided movement to stay active.',
  },
  {
    icon: 'van',
    title: 'Transportation help',
    text: 'Pickups, drop-offs and rides to appointments.',
  },
]

const day = [
  {
    title: 'A warm welcome',
    text: 'Arrivals, a light breakfast, health check-ins and easy conversation.',
  },
  {
    title: 'Activities and meals',
    text: 'Wellness time, creative projects, memory games and lunch together.',
  },
  {
    title: 'Wind-down and departures',
    text: 'Music, one-to-one time and an update for the family at pickup.',
  },
]

const amenities = [
  'Licensed nurses and CNAs on site',
  'Wheelchair-friendly entrances and rooms',
  'Clearly marked rooms and calm rest areas',
  'Secure check-in and staffed oversight',
  'A quiet room for prayer, naps and private calls',
  'A kitchen that cooks on site',
]

const tourChecklist = [
  'ID, and insurance or Medicaid details if they apply',
  'Dietary needs and any mobility devices',
  'Questions about a sample schedule and rides',
]

const faqItems = [
  {
    q: 'Do you offer trial days?',
    a: 'Yes. A half-day or full-day visit lets the person try the program before enrolling.',
  },
  {
    q: 'What level of care do you provide?',
    a: 'Help with daily activities, medication reminders, wellness programs, and coordination with families and providers.',
  },
  {
    q: 'How do we get started?',
    a: 'Tour the center and meet the team; we then guide you through a short enrollment with an assessment, preferences and a care plan.',
  },
  {
    q: 'Do you handle special diets or allergies?',
    a: 'Yes. Meals are shaped around dietary needs, and allergies are carefully managed.',
  },
  {
    q: 'Is transportation available?',
    a: 'Yes. Ask about our door-to-door rides for drop-off, pickup and appointments.',
  },
  {
    q: 'What about memory care needs?',
    a: 'Structured routines, gentle redirection and engaging activities in a secure, supportive space.',
  },
  {
    q: 'Do you accept Medicaid or other programs?',
    a: 'Kentucky Medicaid provider enrollment is in progress. We also accept private pay, long-term care insurance and veterans benefits, and we walk through eligibility on your tour.',
  },
  {
    q: 'How are medications handled?',
    a: 'Trained staff follow medication reminder and record-keeping procedures set by our policy and state guidelines.',
  },
  {
    q: 'What is staffing like?',
    a: 'Attentive ratios, ongoing training and experienced leadership keep the day safe and well run.',
  },
  {
    q: 'What if the person needs help in the restroom?',
    a: 'Discreet, respectful help is always available, with privacy and dignity first.',
  },
  {
    q: 'What activities do you offer?',
    a: 'Music, arts and crafts, chair fitness, games, social groups, and quiet spaces for rest or reading.',
  },
  {
    q: 'What are the hours?',
    a: `${siteConfig.hoursNote} We plan flexible attendance, including partial days.`,
  },
]

export default function OurCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Our center"
        title={
          <>
            Warmth, safety and joy, <Accent>under one roof</Accent>
          </>
        }
        lead="Every room, routine and relationship is designed so participants feel at home and families feel confident: bright spaces, caring experts and engaging days that honor dignity."
        image="/illustrations/room.svg"
        imageAlt="Sunlit activity room with a round table, chairs, plants and a bookshelf"
        facts={[
          siteConfig.address.street,
          `Hours: ${hoursLabel()}`,
          'Door-to-door rides',
          'Meals cooked on site',
        ]}
      >
        <ButtonLink href="#visit">Plan a visit</ButtonLink>
        <ButtonLink href="#faq" variant="secondary">
          Read the questions
        </ButtonLink>
      </PageHero>

      <Section className="flex flex-col gap-6 md:gap-8">
        <Reveal>
          <SectionIntro
            eyebrow="Why families choose it"
            title={
              <>
                Comfort, oversight <Accent>and community</Accent>
              </>
            }
          >
            Caring people and purposeful activities in a bright, welcoming space, every day.
          </SectionIntro>
        </Reveal>
        <CardGrid cards={highlights} />
      </Section>

      <Panel className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal className="flex flex-col gap-5">
          <SectionIntro
            eyebrow="A sample day"
            title={
              <>
                A steady rhythm, <Accent>personal touches</Accent>
              </>
            }
          >
            Hours are announced at opening; partial days are planned.
          </SectionIntro>
          <NumberedList items={day} />
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-5">
          <SectionIntro
            eyebrow="Inside"
            title={
              <>
                Designed for ease <Accent>and dignity</Accent>
              </>
            }
          >
            Every hallway, seat and care station balances safety with hospitality.
          </SectionIntro>
          <CheckList items={amenities} />
        </Reveal>
      </Panel>

      <Section id="visit" className="flex flex-wrap items-center gap-8 md:gap-14">
        <Reveal className="min-w-0 flex-[1_1_440px]">
          <CenterMap footer={isOpen ? 'Tours by appointment →' : 'Tours begin when we open →'} />
        </Reveal>
        <Reveal delay={0.1} className="flex min-w-0 flex-[1_1_400px] flex-col gap-5">
          <SectionIntro
            eyebrow="Visit us"
            title={
              <>
                Plan <Accent>your tour</Accent>
              </>
            }
          >
            {isOpen
              ? 'Tours are by appointment. Bring your questions; we walk through eligibility, funding and next steps.'
              : 'Tours start when we open. Join the waitlist and we will email you the dates.'}
          </SectionIntro>
          <div className="flex flex-col gap-3 rounded-card bg-mint p-5">
            <h3 className="type-title-sm text-navy">What to bring</h3>
            <CheckList items={tourChecklist} />
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="#waitlist">Join the waitlist</ButtonLink>
            <ButtonLink
              href={directionsUrl}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      <Faq items={faqItems} intro="Need something specific? Email us and we will help." />
      <OtherServices
        title={
          <>
            Four services, <Accent>one team</Accent>
          </>
        }
      />
    </>
  )
}
