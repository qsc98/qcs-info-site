import CheckList from '@/components/ui/CheckList'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionIntro from '@/components/ui/SectionIntro'
import { Accent } from '@/components/ui/SectionTitle'
import { medicaidNote } from '@/site.config'

/**
 * How a service can be paid for. `options` are `{ name, detail }`; the
 * Medicaid row always comes from site.config so it tracks enrollment.
 */
export default function PayingForCare({ intro, options, help, note }) {
  const rows = [
    ...options.slice(0, 1),
    { name: 'Medicaid waivers', detail: medicaidNote() },
    ...options.slice(1),
  ]
  return (
    <Section id="paying" className="flex flex-col gap-6 md:gap-8">
      <Reveal>
        <SectionIntro
          eyebrow="Paying for care"
          title={
            <>
              Costs <Accent>and funding</Accent>
            </>
          }
        >
          {intro}
        </SectionIntro>
      </Reveal>
      <div className="grid gap-4 md:gap-5 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <dl className="divide-y divide-line rounded-card border border-line bg-white">
            {rows.map((row) => (
              <div
                key={row.name}
                className="grid gap-1 px-5 py-4 md:grid-cols-[200px_1fr] md:gap-6"
              >
                <dt className="font-display text-[17px] font-semibold text-navy">{row.name}</dt>
                <dd className="type-card-line text-text-muted">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-4 rounded-card bg-mint p-5 md:p-6">
          <h3 className="type-title-sm text-navy">How we help</h3>
          <CheckList items={help} />
          {note ? <p className="text-[14px] text-text-faint">{note}</p> : null}
        </Reveal>
      </div>
    </Section>
  )
}
