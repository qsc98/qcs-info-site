import Icon from '@/components/ui/Icon'
import siteConfig from '@/site.config'

const networks = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
}

/**
 * Profile links for the footer. Renders nothing until real URLs exist in
 * site.config; keys must match `networks` (and an Icon of the same name).
 */
export default function SocialLinks() {
  const entries = Object.entries(siteConfig.social).filter(([key, url]) => networks[key] && url)
  if (!entries.length) return null
  return (
    <ul className="flex items-center gap-2" aria-label="Social media">
      {entries.map(([key, url]) => (
        <li key={key}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${siteConfig.name} on ${networks[key]}`}
            className="inline-flex size-11 items-center justify-center rounded-full bg-white/8 text-on-navy-muted focus-ring-inverse transition-colors hover:bg-white/14 hover:text-white"
          >
            <Icon name={key} size={20} />
          </a>
        </li>
      ))}
    </ul>
  )
}
