import ContactForm from '@/components/forms/ContactForm'
import ContactDetails from '@/components/sections/ContactDetails'
import MapEmbed from '@/components/sections/MapEmbed'
import PageHero from '@/components/sections/PageHero'
import { ButtonLink } from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionIntro from '@/components/ui/SectionIntro'
import { Accent } from '@/components/ui/SectionTitle'
import { pageMetadata } from '@/lib/seo'
import siteConfig, { fullAddress, isOpen } from '@/site.config'

export const metadata = pageMetadata({
  title: isOpen ? 'Contact Us' : 'Contact and Waitlist',
  description: `Message or email ${siteConfig.name}, an adult day health care center at ${fullAddress}, or join the opening waitlist.`,
  path: '/contact',
})

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
        media={<MapEmbed />}
      >
        <ButtonLink href="#message">Send a message</ButtonLink>
        {isOpen ? null : (
          <ButtonLink href="#waitlist" variant="secondary">
            Join the waitlist
          </ButtonLink>
        )}
      </PageHero>

      <Section
        id="message"
        className="grid items-start gap-6 md:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14"
      >
        <Reveal className="flex flex-col gap-2 rounded-card bg-navy p-5 text-white md:p-8">
          <h2 className="type-card-title">Ways to reach us</h2>
          <ContactDetails tone="dark" />
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-6">
          <SectionIntro
            eyebrow="Message us"
            title={
              <>
                Send <Accent>a short note</Accent>
              </>
            }
          >
            A question, a referral or a partnership idea. We usually reply within a business day.
          </SectionIntro>
          <ContactForm />
        </Reveal>
      </Section>
    </>
  )
}
