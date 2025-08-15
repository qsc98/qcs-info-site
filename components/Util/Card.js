export default function Card({ title, icon, children, className = '' }) {
  return (
    <div
      className={`rounded-2xl bg-white/80 p-6 shadow-[0_14px_40px_-20px_rgba(16,185,129,0.35)] ring-1 ring-emerald-900/5 backdrop-blur ${className}`}
    >
      {title || icon ? (
        <div className="mb-4 flex items-center gap-3">
          {icon ? (
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
              {icon}
            </span>
          ) : null}
          {title ? <h3 className="text-lg font-semibold text-gray-900">{title}</h3> : null}
        </div>
      ) : null}
      {children}
    </div>
  )
}
