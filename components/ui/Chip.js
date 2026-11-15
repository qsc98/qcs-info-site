import cx from '@/lib/cx'

/** A small fact on a white pill, e.g. "Hours: to be announced". */
export default function Chip({ as: Tag = 'span', className, children }) {
  return (
    <Tag
      className={cx(
        'rounded-pill border border-line bg-white px-[11px] py-[7px] text-[13px] font-semibold text-navy md:px-3 md:py-2 md:text-[14px]',
        className
      )}
    >
      {children}
    </Tag>
  )
}
