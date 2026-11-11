import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionIntro from '@/components/ui/SectionIntro'
import { Accent } from '@/components/ui/SectionTitle'

/**
 * Questions as native <details> rows: keyboard- and screen-reader-friendly,
 * and they open without JavaScript. Items are `{ q, a }`.
 */
export default function Faq({ items, intro, id = 'faq' }) {
  return (
    <Section id={id} className="grid gap-6 md:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <Reveal>
        <SectionIntro
          eyebrow="Questions"
          title={
            <>
              Asked <Accent>and answered</Accent>
            </>
          }
        >
          {intro}
        </SectionIntro>
      </Reveal>
      <Reveal delay={0.1} className="divide-y divide-line rounded-card border border-line bg-white">
        {items.map((item) => (
          <details key={item.q} className="group">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-card px-5 py-4 text-[16px] font-semibold text-navy focus-ring md:text-[17px] [&::-webkit-details-marker]:hidden">
              {item.q}
              <Icon
                name="chevron"
                size={20}
                className="flex-none text-teal transition-transform group-open:rotate-180"
              />
            </summary>
            <p className="px-5 pb-5 type-card-line text-text-muted">{item.a}</p>
          </details>
        ))}
      </Reveal>
    </Section>
  )
}
