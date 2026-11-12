import Icon from '@/components/ui/Icon'
import cx from '@/lib/cx'
import siteConfig, { directionsUrl, fullAddress, hoursSummary } from '@/site.config'

const { contact } = siteConfig

const tones = {
  light: {
    label: 'text-navy',
    value: 'text-text-muted',
    link: 'font-semibold text-teal underline hover:text-teal-hover focus-ring',
    divider: 'border-line',
    tile: 'bg-mint text-teal',
  },
  dark: {
    label: 'text-white',
    value: 'text-on-navy-muted',
    link: 'font-semibold text-mint-strong underline hover:text-white focus-ring-inverse',
    divider: 'border-white/14',
    tile: 'bg-white/10 text-mint-strong',
  },
}

/**
 * Email, address, hours and phone as a list of rows, every fact from
 * site.config. `tone` is the surface: `light` (white) or `dark` (navy).
 */
export default function ContactDetails({ tone = 'light', className }) {
  const t = tones[tone]
  const rows = [
    {
      icon: 'mail',
      label: 'Email',
      value: (
        <a href={`mailto:${contact.email}`} className={cx(t.link, 'break-all')}>
          {contact.email}
        </a>
      ),
    },
    {
      icon: 'pin',
      label: 'Visit',
      value: (
        <>
          <address className="not-italic">{fullAddress}</address>
          <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={t.link}>
            Get directions
          </a>
        </>
      ),
    },
    {
      icon: 'clock',
      label: 'Hours',
      value: siteConfig.hours ? hoursSummary() : 'To be announced at opening',
    },
    {
      icon: 'chat',
      label: 'Phone',
      value: contact.phone ? (
        <a href={`tel:${contact.phone}`} className={t.link}>
          {contact.phoneDisplay}
        </a>
      ) : (
        'Our line opens with the center'
      ),
    },
  ]

  return (
    <ul className={cx('flex flex-col', className)}>
      {rows.map((row, i) => (
        <li
          key={row.label}
          className={cx('flex gap-3.5 py-3.5', i > 0 && 'border-t', i > 0 && t.divider)}
        >
          <span
            className={cx(
              'flex size-9 flex-none items-center justify-center rounded-[10px]',
              t.tile
            )}
          >
            <Icon name={row.icon} size={18} />
          </span>
          <span className="flex min-w-0 flex-col gap-0.5 type-card-line">
            <span className={cx('font-display text-[16px] font-semibold', t.label)}>
              {row.label}
            </span>
            <span className={cx('flex flex-col gap-0.5', t.value)}>{row.value}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}
