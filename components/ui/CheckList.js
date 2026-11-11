import Icon from '@/components/ui/Icon'
import cx from '@/lib/cx'

/** A list with teal check marks. */
export default function CheckList({ items, className }) {
  return (
    <ul className={cx('flex flex-col gap-2.5', className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 type-card-line text-text-muted">
          <Icon name="check" size={18} className="mt-0.5 flex-none text-teal" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
