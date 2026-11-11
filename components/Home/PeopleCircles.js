const colors = ['bg-mint-strong', 'bg-mint-mid', 'bg-amber', 'bg-teal']

/** The four overlapping avatar circles (no faces, by design). */
export default function PeopleCircles() {
  return (
    <span aria-hidden="true" className="flex flex-none">
      {colors.map((c, i) => (
        <span key={c} className={`size-10 rounded-full border-2 border-white ${c} ${i ? '-ml-3' : ''}`} />
      ))}
    </span>
  )
}
