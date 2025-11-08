import Link from 'next/link'

export default function PrimaryCta({ href = '#', children, className = '', ...props }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#116768] px-6 py-3 font-semibold text-white shadow-[0_8px_20px_rgba(17,103,104,0.3)] transition hover:bg-[#0d5556] focus:outline-none focus:ring-2 focus:ring-[#116768]/50 ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}
