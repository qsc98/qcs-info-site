import { ButtonLink } from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionIntro from '@/components/ui/SectionIntro'
import { Accent } from '@/components/ui/SectionTitle'

/**
 * The intro across the top with a link to the contact page, then the
 * questions as cards in two columns (one on phones). Each card is a native
 * <details>: keyboard- and screen-reader-friendly, and it opens without
 * JavaScript. Items are `{ q, a }`; the first half goes in the left column.
 */
export default function Faq({ items, intro, id = 'faq' }) {
  const half = Math.ceil(items.length / 2)
  const columns = [items.slice(0, half), items.slice(half)]

  return (
    <Section id={id} className="flex flex-col gap-6 md:gap-8">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
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
        <ButtonLink href="/contact" variant="secondary">
          Ask us something else
        </ButtonLink>
      </Reveal>
      <div className="grid items-start gap-3 md:gap-4 lg:grid-cols-2">
        {columns.map((column, c) => (
          <Reveal key={c} delay={c * 0.1} className="flex flex-col gap-3 md:gap-4">
            {column.map((item) => (
              <details key={item.q} className="group rounded-card border border-line bg-white">
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
        ))}
      </div>
    </Section>
  )
}
