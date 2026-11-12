import Image from 'next/image'
import { heroFrame } from '@/components/layout/heroFrame'
import { ButtonLink } from '@/components/ui/Button'
import Float from '@/components/ui/Float'
import Icon from '@/components/ui/Icon'
import Reveal from '@/components/ui/Reveal'
import services from '@/content/services'
import siteConfig, { locality } from '@/site.config'

const mosaic = [
  { src: '/illustrations/room.svg', alt: 'Activity room at our center' },
  { src: '/illustrations/van.svg', alt: 'Lift-equipped van' },
  { src: '/illustrations/home.svg', alt: 'A living room at home' },
  { src: '/illustrations/lunch.svg', alt: 'Plated lunch' },
]

// Floating card tilt and float delay, in service order (design/README.md §2.4).
const cardMotion = [
  { tilt: -2, delay: 0 },
  { tilt: 1.5, delay: 0.8 },
  { tilt: 2, delay: 1.6 },
  { tilt: -1, delay: 2.4 },
]

/** §3.2. The notch nav is drawn over this panel by the header (NotchNav). */
export default function Hero() {
  return (
    <section id="top" className={heroFrame}>
      <div className="relative flex min-h-[660px] flex-col justify-end overflow-hidden rounded-panel-mobile bg-navy md:min-h-[720px] md:rounded-panel">
        <Reveal variant="zoom" eager className="absolute inset-0 hidden lg:block">
          <Image
            src="/illustrations/journey.svg"
            alt="A home with a ramp, a lift-equipped van on the road, a plated meal and our center with its activity room"
            fill
            preload
            sizes="1248px"
            className="object-cover object-bottom"
          />
        </Reveal>
        {/* Below 1024px the wide scene would crop to one service; the mosaic keeps all four. */}
        <Reveal
          variant="zoom"
          eager
          className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1.5 bg-page lg:hidden"
        >
          {mosaic.map((tile) => (
            <span key={tile.src} className="relative min-h-0">
              <Image src={tile.src} alt={tile.alt} fill sizes="50vw" className="object-cover" />
            </span>
          ))}
        </Reveal>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,31,51,0.55)_0%,rgba(10,31,51,0.18)_38%,rgba(10,31,51,0.86)_100%)]"
        />

        <ServiceCards />

        <div className="relative flex flex-col gap-3.5 px-5 pb-[22px] md:gap-5 md:px-12 md:pb-11">
          <div className="flex max-w-[780px] flex-col gap-3.5 md:gap-5">
            <Reveal
              as="span"
              eager
              className="inline-flex items-center gap-2 self-start rounded-pill border border-white/35 bg-white/16 px-3 py-[7px] text-[13px] font-semibold text-white md:px-3.5 md:py-2 md:text-[14px]"
            >
              <span aria-hidden="true" className="size-2 rounded-full bg-mint-strong" />
              {siteConfig.launch.statusShort} · {locality}
            </Reveal>
            <Reveal as="h1" eager delay={0.15} className="type-display text-white">
              Good days,
              <br />
              at home <span className="text-mint-strong">or with us.</span>
            </Reveal>
            <Reveal as="p" eager delay={0.3} className="max-w-[600px] type-lead text-on-image-text">
              Four services from one licensed {siteConfig.address.city} team: adult day health care,
              in-home care, medical transportation and nutritious meals.
            </Reveal>
            <Reveal eager delay={0.45} className="flex flex-wrap gap-3">
              <ButtonLink
                href="#waitlist"
                variant="inverse"
                size="lg"
                className="flex-1 md:flex-none"
              >
                Join the opening waitlist
              </ButtonLink>
              <ButtonLink
                href="#services"
                variant="outline-inverse"
                size="lg"
                className="hidden md:inline-flex"
              >
                See all four services
              </ButtonLink>
            </Reveal>
          </div>
          <ServicePills />
        </div>
      </div>
    </section>
  )
}

/** Desktop only: the four services as white cards floating on the scene. */
function ServiceCards() {
  return (
    <Reveal
      variant="pop"
      eager
      delay={0.5}
      className="absolute top-[120px] right-10 hidden grid-cols-2 gap-4 lg:grid"
    >
      {services.map((service, i) => (
        <Float key={service.key} eager tilt={cardMotion[i].tilt} delay={cardMotion[i].delay}>
          <a
            href="#services"
            className="flex w-[262px] items-center gap-3 rounded-card-small bg-white px-4 py-3.5 text-navy shadow-float-image focus-ring-inverse"
          >
            <span className="relative size-12 flex-none overflow-hidden rounded-icon-tile">
              <Image src={service.image} alt="" fill sizes="48px" className="object-cover" />
            </span>
            <span className="flex flex-col">
              <span className="font-display text-[16px] font-semibold">{service.title}</span>
              <span className="text-[13px] text-text-faint">{service.sub}</span>
            </span>
          </a>
        </Float>
      ))}
    </Reveal>
  )
}

/**
 * The four services as pills (a 2×2 grid on phones). Hidden from 1024px,
 * where the floating service cards already name them.
 */
function ServicePills() {
  return (
    <Reveal
      as="ul"
      eager
      delay={0.6}
      aria-label="Our four services"
      className="mt-1 grid grid-cols-2 gap-2 md:mt-2.5 md:flex md:flex-wrap lg:hidden"
    >
      {services.map((service) => (
        <li key={service.key} className="flex">
          <a
            href="#services"
            className="flex w-full items-center gap-2 rounded-thumb border border-white/28 bg-white/14 p-2.5 text-[13px] leading-[1.15] font-semibold text-white focus-ring-inverse hover:bg-white/20 md:rounded-pill md:border-white/30 md:px-3.5 md:text-[15px] md:leading-[normal]"
          >
            <span className="flex size-7 flex-none items-center justify-center rounded-lg bg-white/14 text-mint-strong md:size-auto md:bg-transparent">
              <Icon name={service.icon} size={18} className="size-4 md:size-[18px]" />
            </span>
            {service.title}
          </a>
        </li>
      ))}
    </Reveal>
  )
}
