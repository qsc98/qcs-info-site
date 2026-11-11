import OtherServices from '@/components/sections/OtherServices'
import PageHero from '@/components/sections/PageHero'
import { ButtonLink } from '@/components/ui/Button'
import CardGrid from '@/components/ui/CardGrid'
import CheckList from '@/components/ui/CheckList'
import Panel from '@/components/ui/Panel'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionIntro from '@/components/ui/SectionIntro'
import { Accent } from '@/components/ui/SectionTitle'
import { pageMetadata } from '@/lib/seo'
import siteConfig from '@/site.config'

export const metadata = pageMetadata({
  title: 'About Us',
  description: `Meet the team behind ${siteConfig.name}, a licensed adult day health care center in ${siteConfig.address.city}, KY serving Louisville-area families.`,
  path: '/about-us',
})

const pillars = [
  {
    icon: 'chat',
    title: 'Trust',
    text: 'Clear communication, dependable schedules and real accountability.',
  },
  {
    icon: 'people',
    title: 'Community',
    text: 'Families, churches and neighborhood centers around each person.',
  },
  {
    icon: 'shield',
    title: 'Safety',
    text: 'Licensed clinicians, written procedures and leadership on call.',
  },
]

const partnerships = [
  {
    icon: 'heart',
    title: 'Faith-based outreach',
    text: 'Respite days, rides and bilingual volunteers, coordinated with church partners.',
  },
  {
    icon: 'house',
    title: 'Neighborhood centers',
    text: 'Shared programs, referrals and safe rooms for social time.',
  },
  {
    icon: 'clipboard',
    title: 'Technology and operations',
    text: 'Secure care notes and timely updates keep everyone aligned.',
  },
]

const familyExperience = [
  'A care plan written with the family',
  'The same caregivers whenever possible',
  'Visit notes, and updates by text or phone if you want them',
  'Safe transfers and home-safety habits',
  'One point of contact and an easy way to give feedback',
]

const behindTheScenes = [
  'Nurse-led oversight of medications and vital signs',
  'Secure notes and timely updates for families',
  'Background-checked, trained and supervised caregivers',
  'Backup coverage and hygiene routines',
  'Care conferences with families and providers',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Rooted in care, <Accent>built for community</Accent>
          </>
        }
        lead="We are caregivers, technologists and community advocates giving adults in the Louisville area support they can trust, alongside social workers, volunteers and local partners. With faith groups, community centers and families, we keep care personal, familiar and close to home."
        image="/illustrations/craft.svg"
        imageAlt="A craft table from above with paint, brushes, yarn and a mug"
        facts={['Licensed in Kentucky', `Based in ${siteConfig.address.city}`, 'Family-centered']}
      >
        <ButtonLink href="/our-center">See our center</ButtonLink>
        <ButtonLink href="/careers" variant="secondary">
          Work with us
        </ButtonLink>
      </PageHero>

      <Section className="flex flex-col gap-6 md:gap-8">
        <Reveal>
          <SectionIntro
            eyebrow="Why we exist"
            title={
              <>
                Our mission <Accent>and pillars</Accent>
              </>
            }
          >
            Every person deserves respect, meaningful days and the chance to thrive in their own
            community. We build care around each person’s culture and wellness, and keep their
            family in the loop.
          </SectionIntro>
        </Reveal>
        <CardGrid cards={pillars} />
      </Section>

      <Panel className="flex flex-col gap-6 md:gap-8">
        <Reveal>
          <SectionIntro
            eyebrow="In the community"
            title={
              <>
                Partnerships <Accent>and programs</Accent>
              </>
            }
          >
            Care works best when the people around someone work together.
          </SectionIntro>
        </Reveal>
        <CardGrid cards={partnerships} />
      </Panel>

      <Section className="flex flex-col gap-6 md:gap-8">
        <Reveal>
          <SectionIntro
            eyebrow="How we work"
            title={
              <>
                Clarity, safety <Accent>and follow-through</Accent>
              </>
            }
          >
            Clinical oversight and clear routines, so you always know who is caring for the person.
          </SectionIntro>
        </Reveal>
        <div className="grid gap-4 md:gap-5 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-4 rounded-card border border-line p-5 md:p-6">
            <h3 className="type-title-sm text-navy">What families experience</h3>
            <CheckList items={familyExperience} />
          </Reveal>
          <Reveal
            delay={0.1}
            className="flex flex-col gap-4 rounded-card border border-line p-5 md:p-6"
          >
            <h3 className="type-title-sm text-navy">Behind the scenes</h3>
            <CheckList items={behindTheScenes} />
          </Reveal>
        </div>
      </Section>

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
