import Faq from '@/components/sections/Faq'
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
import siteConfig from '@/site.config'

const { careersEmail } = siteConfig.contact

export const metadata = pageMetadata({
  title: 'Careers',
  description: `Join our adult day health care team in ${siteConfig.address.city}, KY: nursing, engagement and transportation roles with paid training.`,
  path: '/careers',
})

const benefits = [
  {
    icon: 'heart',
    title: 'Health coverage',
    text: 'Medical, dental, vision and mental health support from day one for eligible team members.',
  },
  {
    icon: 'book',
    title: 'Growth and training',
    text: 'Paid certifications, leadership workshops and hands-on mentoring with clinical leads.',
  },
  {
    icon: 'calendar',
    title: 'Steady scheduling',
    text: 'Stable shifts, cross-training and room for school, caregiving or a second job.',
  },
]

const roles = [
  {
    icon: 'heart',
    title: 'Adult day health nurse',
    items: [
      'Licensed RN or LPN',
      'Charting and medication oversight',
      'Daily family communication',
    ],
  },
  {
    icon: 'sparkle',
    title: 'Engagement guide',
    items: ['Lead memory care groups', 'Plan outings and arts', 'Support daily routines'],
  },
  {
    icon: 'van',
    title: 'Transportation specialist',
    items: ['Commercial license preferred', 'Door-to-door help', 'A safety-first habit'],
  },
]

const hiring = [
  {
    title: 'Share your story',
    text: 'Send your resume, licenses and a short note on why you love adult care.',
  },
  {
    title: 'Meet the team',
    text: 'A video or on-site interview with clinical leads and a tour of the center.',
  },
  {
    title: 'Onboard and shadow',
    text: 'A background check, paid onboarding and mentoring before your first solo shift.',
  },
]

const values = [
  'Care that honors dignity, independence and community',
  'Good tools and notes that keep everyone in sync',
  'Continuous learning, shared playbooks and daily huddles',
  'Reliable schedules and accountability both ways',
]

const faqItems = [
  {
    q: 'Do I need adult day care experience?',
    a: 'It helps, but we train anyone with healthcare, hospitality or community experience who shares our mission.',
  },
  {
    q: 'What shifts are there?',
    a: 'Mostly day shifts, with staggered and part-time schedules for the transportation and kitchen teams.',
  },
  {
    q: 'Do you support certifications?',
    a: 'Yes. We reimburse approved CNA, CPR, DSP and activity director programs, and offer continuing education stipends.',
  },
  {
    q: 'How do I apply?',
    a: `Email ${careersEmail} with your resume. Once hiring begins, we reply within two business days.`,
  },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build a career <Accent>rooted in dignity</Accent>
          </>
        }
        lead="Join clinicians, engagement guides and operations teammates who believe adult day care can feel like a second home. We hire people who value compassion, structure and new ideas."
        image="/illustrations/journey.svg"
        imageAlt="A home, a van on the road, a meal and our center: the four parts of the work"
        facts={[
          'Applications open when hiring begins',
          'Paid training',
          'Equal opportunity employer',
        ]}
      >
        <ButtonLink href={`mailto:${careersEmail}?subject=Careers`}>Email your resume</ButtonLink>
        <ButtonLink href="#roles" variant="secondary">
          See the roles
        </ButtonLink>
      </PageHero>

      <Section className="flex flex-col gap-6 md:gap-8">
        <Reveal>
          <SectionIntro
            eyebrow="Why work with us"
            title={
              <>
                Benefits that back <Accent>your purpose</Accent>
              </>
            }
          >
            Clinical standards and people-first care, for the team as much as for participants.
          </SectionIntro>
        </Reveal>
        <CardGrid cards={benefits} />
      </Section>

      <Section id="roles" className="flex flex-col gap-6 md:gap-8">
        <Reveal>
          <SectionIntro
            eyebrow="Roles"
            title={
              <>
                Where you <Accent>fit in</Accent>
              </>
            }
          >
            The roles we plan to fill first. Every one supports our promise to families.
          </SectionIntro>
        </Reveal>
        <CardGrid cards={roles} />
      </Section>

      <Panel className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal className="flex flex-col gap-5">
          <SectionIntro
            eyebrow="How we hire"
            title={
              <>
                Open, quick <Accent>and supportive</Accent>
              </>
            }
          />
          <NumberedList items={hiring} />
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-5">
          <SectionIntro
            eyebrow="What we value"
            title={
              <>
                How we <Accent>work together</Accent>
              </>
            }
          />
          <CheckList items={values} />
        </Reveal>
      </Panel>

      <Faq items={faqItems} intro="What candidates ask most. Email us for anything else." />
    </>
  )
}
