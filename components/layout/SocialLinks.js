import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import siteConfig from '@/site.config'

const icons = {
  facebook: { Icon: FaFacebookF, label: 'Facebook', color: 'text-[#1877F2]' },
  instagram: { Icon: FaInstagram, label: 'Instagram', color: 'text-[#E1306C]' },
  linkedin: { Icon: FaLinkedinIn, label: 'LinkedIn', color: 'text-[#0A66C2]' },
}

/** Renders nothing until real profile URLs exist in site.config. */
export default function SocialLinks({ className = '' }) {
  const entries = Object.entries(siteConfig.social).filter(([key, url]) => icons[key] && url)
  if (!entries.length) return null
  return (
    <ul className={`flex items-center gap-2 ${className}`.trim()} aria-label="Social media">
      {entries.map(([key, url]) => {
        const { Icon, label, color } = icons[key]
        return (
          <li key={key}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${siteConfig.name} on ${label}`}
              className={`inline-flex size-11 items-center justify-center rounded-full transition hover:bg-slate-100 ${color}`}
            >
              <Icon className="size-5" aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
