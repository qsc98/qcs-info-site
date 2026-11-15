import Icon from '@/components/ui/Icon'
import cx from '@/lib/cx'
import siteConfig from '@/site.config'

/**
 * What a family wants to know at a glance, taken from facts already on the
 * site (services, launch status, payment). Loud items are short and set in
 * capitals; soft ones read as a sentence.
 */
const details = [
  { icon: 'van', text: 'Door-through-door rides', loud: true },
  siteConfig.launch.licensed && {
    icon: 'shield',
    text: 'Licensed by the Commonwealth of Kentucky',
  },
  { icon: 'meal', text: 'Diabetic, low-sodium & allergy-aware meals' },
  { icon: 'house', text: 'Care at your Home', loud: true },
  { icon: 'heart', text: 'Nursing checks, activities and lunch at our center' },
  { icon: 'people', text: 'One team, four services', loud: true },
  {
    icon: 'check',
    text:
      siteConfig.launch.medicaid === 'enrolled'
        ? 'Kentucky Medicaid accepted'
        : 'Medicaid enrollment in progress',
  },
  { icon: 'van', text: 'Accessible van', loud: true },
  { icon: 'sparkle', text: 'Private pay & Medicaid' },
].filter(Boolean)

function Track({ hidden }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      aria-label={hidden ? undefined : 'At a glance'}
      className="flex shrink-0 items-center"
    >
      {details.map((item) => (
        <li key={item.text} className="flex items-center">
          <span className="flex items-center gap-2.5 px-4 md:gap-3 md:px-6">
            <span className="flex size-8 flex-none items-center justify-center rounded-full bg-mint text-teal md:size-9">
              <Icon name={item.icon} size={18} />
            </span>
            <span
              className={cx(
                'whitespace-nowrap text-navy',
                item.loud
                  ? 'font-display text-[17px] font-bold tracking-[-0.01em] uppercase md:text-[20px]'
                  : 'font-body text-[15px] font-semibold md:text-[17px]'
              )}
            >
              {item.text}
            </span>
          </span>
          <Icon name="sparkle" size={16} className="flex-none text-amber" />
        </li>
      ))}
    </ul>
  )
}

/**
 * A slow, endless strip of details across the bottom of the hero photo.
 * Hover or focus pauses it; reduced motion leaves it still.
 */
export default function HeroRibbon() {
  return (
    <div className="group relative flex h-[60px] items-center overflow-hidden bg-white/95 shadow-bar backdrop-blur-sm md:h-[72px]">
      <div className="relative flex min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_48px,black_calc(100%-48px),transparent)]">
        <div className="flex w-max animate-marquee group-focus-within:[animation-play-state:paused] group-hover:[animation-play-state:paused]">
          <Track />
          <Track hidden />
        </div>
      </div>
    </div>
  )
}
