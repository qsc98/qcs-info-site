import Link from 'next/link'
import siteConfig, { isOpen } from '../../site.config'

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-teal px-6 py-3 text-base font-semibold text-white shadow-[0_8px_20px_rgba(17,103,104,0.3)] transition hover:bg-[#0d5556] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-teal/60 focus-visible:ring-offset-2'

/**
 * Primary button/link. `tel:` hrefs are launch-gated: until a phone number is
 * configured in site.config they route to the waitlist instead.
 */
export default function PrimaryCta({ href = '#', children, className = '', variant, ...props }) {
  const classes = `${baseClasses} ${className}`.trim()
  let target = href
  let label = children

  if (typeof href === 'string' && href.startsWith('tel:')) {
    if (siteConfig.contact.phone) {
      target = `tel:${siteConfig.contact.phone}`
    } else {
      target = isOpen ? '/contact' : '/contact#waitlist'
      label = isOpen ? 'Contact us' : 'Join the waitlist'
    }
  }

  const isInternal = typeof target === 'string' && target.startsWith('/') && !target.startsWith('//')

  if (isInternal) {
    return (
      <Link href={target} className={classes} {...props}>
        {label}
      </Link>
    )
  }
  return (
    <a href={target} className={classes} {...props}>
      {label}
    </a>
  )
}
