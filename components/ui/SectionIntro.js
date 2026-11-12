import Eyebrow from '@/components/ui/Eyebrow'
import SectionTitle from '@/components/ui/SectionTitle'
import cx from '@/lib/cx'

/**
 * Eyebrow, section title and an optional intro paragraph. `title` is a node
 * so it can carry an <Accent>. From 1024px there is no width cap, so a title
 * or intro stays on one line wherever its column is wide enough; below that
 * the measure is 640px. `wide` raises it to 720px between 768px and 1024px.
 */
export default function SectionIntro({
  eyebrow,
  title,
  children,
  align = 'start',
  wide = false,
  className,
}) {
  return (
    <div
      className={cx(
        'flex flex-col gap-2.5',
        wide ? 'max-w-[640px] md:max-w-[720px] lg:max-w-none' : 'max-w-[640px] lg:max-w-none',
        align === 'center' && 'mx-auto items-center text-center',
        className
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <SectionTitle>{title}</SectionTitle>
      {children ? <p className="type-body text-text-muted">{children}</p> : null}
    </div>
  )
}
