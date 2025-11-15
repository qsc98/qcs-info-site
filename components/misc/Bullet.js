import { FaCheckCircle } from 'react-icons/fa'

export default function Bullet({
  children,
  className = '',
  iconClassName = '',
  textClassName = '',
}) {
  return (
    <li className={`flex items-start gap-2 text-slate-700 ${className}`}>
      <FaCheckCircle className={`mt-0.5 size-4 flex-none text-[#116768] ${iconClassName}`} />
      <span className={textClassName}>{children}</span>
    </li>
  )
}
