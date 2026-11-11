import Eyebrow from '@/components/ui/Eyebrow'
import SectionTitle from '@/components/ui/SectionTitle'
import cx from '@/lib/cx'

/**
 * Eyebrow, section title and an optional intro paragraph. `title` is a node
 * so it can carry an <Accent>. `wide` lets a one-sentence intro that would
 * just overflow the 640px measure stay on one line from 768px.
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
        wide ? 'max-w-[640px] md:max-w-[720px]' : 'max-w-[640px]',
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
