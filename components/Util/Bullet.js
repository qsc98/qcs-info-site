import { FaCheckCircle } from 'react-icons/fa'

export default function Bullet({ children }) {
  return (
    <li className="flex items-start gap-2 text-gray-700">
      <FaCheckCircle className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
      <span>{children}</span>
    </li>
  )
}
