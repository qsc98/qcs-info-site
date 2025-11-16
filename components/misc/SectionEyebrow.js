const baseClasses =
  'mb-12 inline-flex items-center rounded-full bg-navy px-3 py-1 text-sm font-semibold text-white shadow'

const toneClasses = {
  navy: 'border border-navy/20 bg-navy text-white shadow-[0_12px_24px_rgba(26,69,102,0.35)]',
  teal: 'border border-[#116768]/30 bg-[#116768] text-white',
  amber:
    'border border-yellow-500/60 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-yellow-900 shadow-md ring-1 ring-yellow-500/50',
  slate: 'border border-slate-200 bg-slate-700 text-white',
}

export default function SectionEyebrow({
  children,
  className = '',
  tone = 'navy',
  as: Component = 'span',
  ...props
}) {
  const toneClass = toneClasses[tone] ?? toneClasses.teal
  return (
    <Component className={`${baseClasses} ${toneClass} ${className}`.trim()} {...props}>
      {children}
    </Component>
  )
}
