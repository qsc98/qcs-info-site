import Link from 'next/link'

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-[#116768] px-6 py-3 font-semibold text-white shadow-[0_8px_20px_rgba(17,103,104,0.3)] transition hover:bg-[#0d5556] focus:outline-none focus:ring-2 focus:ring-[#116768]/50'

export default function PrimaryCta({ href = '#', children, className = '', ...props }) {
  const isInternalLink = typeof href === 'string' && href.startsWith('/') && !href.startsWith('//')
  const classes = `${baseClasses} ${className}`.trim()

  if (isInternalLink) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  )
}
