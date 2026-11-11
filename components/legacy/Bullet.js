import { FaCheckCircle } from 'react-icons/fa'

export default function Bullet({
  children,
  icon,
  className = '',
  iconClassName = '',
  textClassName = '',
}) {
  return (
    <li className={`flex items-start gap-2 text-slate-700 ${className}`}>
      <span className={`mt-0.5 flex-none text-teal ${iconClassName}`} aria-hidden="true">
        {icon ?? <FaCheckCircle className="size-4" />}
      </span>
      <span className={textClassName}>{children}</span>
    </li>
  )
}
