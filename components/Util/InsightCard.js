export default function InsightCard({
  icon: Icon,
  title,
  value,
  description,
  iconSize = 64,
  className = '',
  children,
}) {
  return (
    <div
      className={`group space-y-3 rounded-lg border border-slate-100 bg-white p-6 text-center shadow-[0_12px_24px_rgba(15,34,71,0.05)] ${className}`}
    >
      {Icon ? <Icon className="mx-auto text-navy" style={{ width: iconSize, height: iconSize }} aria-hidden /> : null}
      {title ? <p className="text-lg font-semibold text-navy">{title}</p> : null}
      {value ? (
        <p className="text-4xl font-bold text-navy">
          {value}
        </p>
      ) : null}
      {description ? <p className="text-sm text-slate-600">{description}</p> : null}
      {children}
    </div>
  )
}
