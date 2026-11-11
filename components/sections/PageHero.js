import Image from 'next/image'
import Chip from '@/components/ui/Chip'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'

/**
 * Top of every inner page: a light mint panel with the eyebrow, <h1>, lead,
 * actions and quick facts, beside an illustration. The top padding clears
 * the fixed compact header (56px, 64px from 1024px).
 */
export default function PageHero({ eyebrow, title, lead, image, imageAlt = '', facts, children }) {
  return (
    <section className="mx-auto w-full max-w-page px-2.5 pt-[66px] md:px-4 md:pt-[72px] lg:pt-20">
      <div className="grid items-center gap-6 rounded-panel-mobile bg-mint p-5 md:gap-10 md:rounded-panel md:p-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal eager className="flex flex-col gap-4 md:gap-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="type-h1 text-navy">{title}</h1>
          {lead ? <p className="type-lead text-text-muted">{lead}</p> : null}
          {children ? <div className="flex flex-wrap gap-3">{children}</div> : null}
          {facts?.length ? (
            <ul aria-label="At a glance" className="flex flex-wrap gap-2.5 pt-1">
              {facts.map((fact) => (
                <Chip as="li" key={fact}>
                  {fact}
                </Chip>
              ))}
            </ul>
          ) : null}
        </Reveal>
        {image ? (
          <Reveal
            eager
            variant="pop"
            delay={0.15}
            className="relative aspect-[4/3] overflow-hidden rounded-block border-[6px] border-white shadow-avatar"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              preload
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
