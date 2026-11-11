import cx from '@/lib/cx'

/** Small uppercase label above a section title. Never a heading. */
export default function Eyebrow({ className, children }) {
  return <span className={cx('type-eyebrow text-teal', className)}>{children}</span>
}
