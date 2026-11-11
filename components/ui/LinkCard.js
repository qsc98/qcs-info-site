import Link from 'next/link'
import Icon from '@/components/ui/Icon'
import IconTile from '@/components/ui/IconTile'
import cx from '@/lib/cx'

/** A white card linking to another page: icon tile, title, one line and an arrow. */
export default function LinkCard({ href, icon, title, line, className }) {
  return (
    <Link
      href={href}
      className={cx(
        'group flex items-center gap-3 rounded-card-small bg-white px-4 py-3.5 text-navy focus-ring transition-shadow hover:shadow-float-light',
        className
      )}
    >
      {icon ? <IconTile name={icon} /> : null}
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="font-display text-[16px] font-semibold md:text-[17px]">{title}</span>
        {line ? <span className="text-[13px] text-text-muted md:text-[14px]">{line}</span> : null}
      </span>
      <Icon
        name="arrow"
        size={20}
        className="flex-none text-teal transition-transform group-hover:translate-x-0.5"
      />
    </Link>
  )
}
