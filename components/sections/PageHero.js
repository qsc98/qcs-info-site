import Image from 'next/image'
import Chip from '@/components/ui/Chip'
import Eyebrow from '@/components/ui/Eyebrow'
import Icon from '@/components/ui/Icon'
import LinkCard from '@/components/ui/LinkCard'
import Reveal from '@/components/ui/Reveal'
import cx from '@/lib/cx'

/**
 * Top of every inner page: a light mint panel with the eyebrow, <h1>, lead,
 * actions and quick facts, beside an illustration (`image`) or any other
 * `media`, such as a map, in the same framed 4:3 slot. `links` (href, icon,
 * title, line) become white cards overlapping the foot of that frame, in
 * place of action buttons. The top padding clears the fixed compact header
 * (56px, 64px from 1024px).
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt = '',
  media,
  facts,
  links,
  children,
}) {
  const factPills = facts?.length > 0 && facts.every((fact) => fact.icon)
  const picture =
    media || image ? (
      <Reveal
        eager
        variant="pop"
        delay={0.15}
        className="relative aspect-[4/3] overflow-hidden rounded-block border-[6px] border-white shadow-avatar"
      >
        {media ?? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            preload
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
        )}
      </Reveal>
    ) : null

  return (
    <section className="mx-auto w-full max-w-page px-2.5 pt-[66px] md:px-4 md:pt-[72px] lg:pt-20">
      <div
        className={cx(
          'relative flex flex-col gap-6 rounded-panel-mobile bg-mint p-5 md:gap-10 md:rounded-panel md:p-12',
          // Room above the pills that sit on the bottom edge.
          factPills && 'lg:pb-16'
        )}
      >
        <div className="grid items-center gap-6 md:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal eager className="flex flex-col gap-4 md:gap-5">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="type-h1 text-navy">{title}</h1>
            {lead ? <p className="type-lead text-text-muted">{lead}</p> : null}
            {children ? <div className="flex flex-wrap gap-3">{children}</div> : null}
            {facts?.length && !factPills ? (
              <ul aria-label="At a glance" className="flex flex-wrap gap-2.5 pt-1">
                {facts.map((fact) => (
                  <Chip as="li" key={fact}>
                    {fact}
                  </Chip>
                ))}
              </ul>
            ) : null}
          </Reveal>
          {links?.length ? (
            <div className="flex flex-col gap-3 lg:pb-10">
              {picture}
              <Reveal
                eager
                variant="pop"
                delay={0.35}
                className="relative z-10 grid gap-3 sm:grid-cols-2 lg:-mt-16 lg:px-3"
              >
                {links.map((link) => (
                  <LinkCard key={link.href} {...link} className="shadow-card-light" />
                ))}
              </Reveal>
            </div>
          ) : (
            picture
          )}
        </div>
        {factPills ? (
          // From 1024px the pills straddle the panel's bottom edge, centred. The
          // wrapper carries the offset because Reveal animates the transform.
          <div className="lg:absolute lg:inset-x-0 lg:bottom-0 lg:translate-y-1/2 lg:px-6 xl:px-12">
            <Reveal
              as="ul"
              eager
              delay={0.3}
              aria-label="At a glance"
              className="grid gap-2.5 border-t border-navy/10 pt-6 sm:grid-cols-2 md:pt-8 lg:flex lg:flex-wrap lg:justify-center lg:gap-3 lg:border-0 lg:pt-0"
            >
              {facts.map((fact) => (
                <li
                  key={fact.label}
                  className="flex items-center gap-2.5 rounded-pill bg-white px-4 py-3 text-[15px] font-semibold text-navy shadow-card-light lg:gap-2 lg:px-3.5 lg:text-[14px] xl:gap-2.5 xl:px-4 xl:text-[15px]"
                >
                  <Icon name={fact.icon} size={18} className="flex-none text-teal" />
                  {fact.label}
                </li>
              ))}
            </Reveal>
          </div>
        ) : null}
      </div>
    </section>
  )
}
