import Link from 'next/link'

const NATIVE = /^(#|mailto:|tel:|https?:)/

/**
 * Next <Link> for routes; a plain <a> for same-page anchors, mail, phone and
 * external URLs, which need no client routing and work before hydration.
 */
export default function SmartLink({ href, ...props }) {
  if (NATIVE.test(href)) return <a href={href} {...props} />
  return <Link href={href} {...props} />
}
