import Faq from '@/components/sections/Faq'
import OtherServices from '@/components/sections/OtherServices'
import PageHero from '@/components/sections/PageHero'
import PayingForCare from '@/components/sections/PayingForCare'
import { ButtonLink } from '@/components/ui/Button'
import CardGrid from '@/components/ui/CardGrid'
import CheckList from '@/components/ui/CheckList'
import NumberedList from '@/components/ui/NumberedList'
import Panel from '@/components/ui/Panel'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionIntro from '@/components/ui/SectionIntro'
import { Accent } from '@/components/ui/SectionTitle'
import services from '@/content/services'

/** A `[lead, accent]` title pair from content, as "lead <Accent>accent</Accent>". */
function accented([lead, accent]) {
  return (
    <>
      {lead} <Accent>{accent}</Accent>
    </>
  )
}

function CardSection({ id, eyebrow, title, intro, cards, panel = false }) {
  const Wrapper = panel ? Panel : Section
  return (
    <Wrapper id={id} className="flex flex-col gap-6 md:gap-8">
      <Reveal>
        <SectionIntro eyebrow={eyebrow} title={accented(title)}>
          {intro}
        </SectionIntro>
      </Reveal>
      <CardGrid cards={cards} />
    </Wrapper>
  )
}

/**
 * The page for one service, from content/services/<page>.js. The summary
 * (number, title, illustration) comes from the service list, so the home
 * page, header and this page never disagree. `highlights` and `paying` are
 * optional: a page only shows sections it has content for.
 */
export default function ServicePage({ page }) {
  const service = services.find((s) => s.key === page.key)
  const { hero, included, audience, rhythm, highlights, standards, paying, faq } = page

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.number}`}
        title={accented(hero.title)}
        lead={hero.lead}
        image={service.image}
        imageAlt={hero.imageAlt}
        facts={hero.facts}
      >
        <ButtonLink href="#waitlist">Join the waitlist</ButtonLink>
        <ButtonLink href="#faq" variant="secondary">
          Read the questions
        </ButtonLink>
      </PageHero>

      <CardSection eyebrow="What’s included" {...included} />

      <Panel className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal className="flex flex-col gap-5">
          <SectionIntro
            eyebrow={audience.eyebrow ?? 'Who it’s for'}
            title={accented(audience.title)}
          >
            {audience.intro}
          </SectionIntro>
          <CheckList items={audience.items} />
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-5">
          <SectionIntro eyebrow={rhythm.eyebrow ?? 'How it works'} title={accented(rhythm.title)}>
            {rhythm.intro}
          </SectionIntro>
          <NumberedList items={rhythm.steps} />
        </Reveal>
      </Panel>

      {highlights ? <CardSection {...highlights} /> : null}
      <CardSection eyebrow="Safety and standards" panel {...standards} />
      {paying ? <PayingForCare {...paying} /> : null}
      <Faq items={faq.items} intro={faq.intro} />
      <OtherServices exclude={service.key} />
    </>
  )
}
