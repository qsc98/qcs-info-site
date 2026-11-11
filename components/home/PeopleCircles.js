import cx from '@/lib/cx'

const colors = ['bg-mint-strong', 'bg-mint-mid', 'bg-amber', 'bg-teal']

/** The four overlapping avatar circles. Deliberately faceless (design/README.md §1). */
export default function PeopleCircles() {
  return (
    <span aria-hidden="true" className="flex flex-none">
      {colors.map((color, i) => (
        <span
          key={color}
          className={cx('size-10 rounded-full border-2 border-white', color, i > 0 && '-ml-3')}
        />
      ))}
    </span>
  )
}
