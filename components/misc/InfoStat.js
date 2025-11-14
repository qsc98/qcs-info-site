export default function InfoStat({ icon: Icon, label, value, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-white/80 bg-white/80 p-4 text-left shadow-[0_10px_25px_rgba(15,34,71,0.08)] backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-3">
        {Icon ? (
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 bg-navy text-white">
            <Icon />
          </span>
        ) : null}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
          <p className="font-jakarta text-base text-navy">{value}</p>
        </div>
      </div>
    </div>
  )
}
