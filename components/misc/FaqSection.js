import SectionHeading from './SectionHeading'

export default function FaqSection({
  id,
  eyebrow,
  title = 'Frequently Asked Questions',
  description,
  items = [],
  className = '',
}) {
  return (
    <section id={id} className={className}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="section-shell mt-10 bg-white/90 px-2 py-2 sm:px-4">
        <div className="divide-y divide-slate-100">
          {items.map((item, idx) => (
            <details key={item.q ?? idx} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-5">
                <span className="font-semibold text-navy">{item.q}</span>
                <span className="ml-4 rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-wider text-slate-500 group-open:hidden">
                  Show
                </span>
                <span className="ml-4 hidden rounded-full border border-[#116768]/30 bg-[#e3f2ef] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#116768] group-open:inline">
                  Hide
                </span>
              </summary>
              <div className="px-4 pb-5 text-slate-600">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
