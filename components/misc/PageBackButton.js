import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const baseClasses =
  'inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-navy shadow-lg shadow-[rgba(17,103,104,0.08)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none'

const PageBackButton = ({ href = '/', label = 'Back to Home', className = '', ariaLabel }) => {
  const finalLabel = label || 'Back to Home'

  return (
    <Link
      href={href || '/'}
      aria-label={ariaLabel || finalLabel}
      className={`${baseClasses} ${className}`.trim()}
    >
      <FaArrowLeft aria-hidden="true" />
      <span>{finalLabel}</span>
    </Link>
  )
}

export default PageBackButton
