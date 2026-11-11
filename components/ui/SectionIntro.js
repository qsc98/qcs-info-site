import Eyebrow from '@/components/ui/Eyebrow'
import SectionTitle from '@/components/ui/SectionTitle'
import cx from '@/lib/cx'

/**
 * Eyebrow, section title and an optional intro paragraph. `title` is a node
 * so it can carry an <Accent>.
 */
export default function SectionIntro({ eyebrow, title, children, align = 'start', className }) {
  return (
    <div
      className={cx(
        'flex max-w-[640px] flex-col gap-2.5',
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
