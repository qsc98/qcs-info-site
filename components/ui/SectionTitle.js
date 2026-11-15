import cx from '@/lib/cx'

/** The one accent phrase in a section title. */
export function Accent({ children }) {
  return <span className="text-teal">{children}</span>
}

/**
 * Section <h2>: `<SectionTitle>Four services, <Accent>one team</Accent></SectionTitle>`.
 */
export default function SectionTitle({ className, children, ...props }) {
  return (
    <h2 className={cx('type-h2 text-navy', className)} {...props}>
      {children}
    </h2>
  )
}
