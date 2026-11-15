import Image from 'next/image'

/** The logo mark. Always decorative: it sits next to the wordmark. */
export default function Logo({ className }) {
  return (
    <Image src="/assets/Logo-Transparent.png" alt="" width={44} height={44} className={className} />
  )
}
