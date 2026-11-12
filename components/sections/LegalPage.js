import Eyebrow from '@/components/ui/Eyebrow'
import Section from '@/components/ui/Section'

/** A long-form legal page: eyebrow, <h1>, effective date and prose. */
export default function LegalPage({ title, effective, children }) {
  return (
    <Section spacing="none" className="px-5 pt-[90px] pb-16 md:px-10 md:pt-[120px] md:pb-[72px]">
      <article className="flex max-w-3xl flex-col gap-3">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="type-h1 text-navy">{title}</h1>
        <p className="text-[14px] text-text-faint">Effective {effective}</p>
        <div className="prose mt-6">{children}</div>
      </article>
    </Section>
  )
}
