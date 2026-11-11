import ContactForm from '@/components/forms/ContactForm'
import PageHero from '@/components/sections/PageHero'
import { ButtonLink } from '@/components/ui/Button'
import FeatureCard from '@/components/ui/FeatureCard'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionIntro from '@/components/ui/SectionIntro'
import { Accent } from '@/components/ui/SectionTitle'
import { pageMetadata } from '@/lib/seo'
import siteConfig, { directionsUrl, fullAddress, hoursSummary, isOpen } from '@/site.config'

const { contact } = siteConfig

export const metadata = pageMetadata({
  title: isOpen ? 'Contact Us' : 'Contact and Waitlist',
  description: `Email ${siteConfig.name}, an adult day health care center at ${fullAddress}, or join the opening waitlist.`,
  path: '/contact',
})

const link = 'font-semibold text-teal underline hover:text-teal-hover'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          isOpen ? (
            <>
              Get <Accent>in touch</Accent>
            </>
          ) : (
            <>
              Get in touch <Accent>before we open</Accent>
            </>
          )
        }
        lead={
          isOpen
            ? 'We are here to help you and the person you care for.'
            : siteConfig.launch.statusLine
        }
        image="/illustrations/map.svg"
        imageAlt={`Map showing our center at ${fullAddress}`}
      >
        <ButtonLink href={`mailto:${contact.email}`}>Email us</ButtonLink>
        {isOpen ? null : (
          <ButtonLink href="#waitlist" variant="secondary">
            Join the waitlist
          </ButtonLink>
        )}
      </PageHero>

      <Section className="grid gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
        <Reveal>
          <FeatureCard icon="mail" title="Email" text="Questions and partnership enquiries.">
            <a href={`mailto:${contact.email}`} className={link}>
              {contact.email}
            </a>
          </FeatureCard>
        </Reveal>
        <Reveal delay={0.08}>
          <FeatureCard
            icon="pin"
            title="Visit"
            text={isOpen ? 'Tours by appointment.' : 'Tours begin when we open.'}
          >
            <address className="type-card-line text-text not-italic">{fullAddress}</address>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={link}>
              Get directions
            </a>
          </FeatureCard>
        </Reveal>
        <Reveal delay={0.16}>
          <FeatureCard
            icon="clock"
            title="Hours"
            text={siteConfig.hours ? hoursSummary() : siteConfig.hoursNote}
          />
        </Reveal>
        <Reveal delay={0.24}>
          <FeatureCard icon="chat" title="Phone">
            {contact.phone ? (
              <a href={`tel:${contact.phone}`} className={link}>
                {contact.phoneDisplay}
              </a>
            ) : (
              <p className="type-card-line text-text-muted">
                Our phone line opens with the center. Join the waitlist and the number comes with
                the opening email.
              </p>
            )}
          </FeatureCard>
        </Reveal>
      </Section>

      {isOpen ? (
        <Section id="contact-form" className="grid gap-6 md:gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            eyebrow="Message us"
            title={
              <>
                Send <Accent>a note</Accent>
              </>
            }
          >
            We reply by email, usually within a business day.
          </SectionIntro>
          <ContactForm />
        </Section>
      ) : null}
    </>
  )
}
