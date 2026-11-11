import Image from 'next/image'
import { Float, Reveal } from './motion'
import services from '../../lib/services'
import siteConfig from '../../site.config'
import LineIcon from '../misc/LineIcon'

const { address, launch } = siteConfig

const mosaic = [
  { src: '/illustrations/room.svg', alt: 'Activity room at our center' },
  { src: '/illustrations/van.svg', alt: 'Lift-equipped van' },
  { src: '/illustrations/home.svg', alt: 'A living room at home' },
  { src: '/illustrations/lunch.svg', alt: 'Plated lunch' },
]

// Floating card tilt and float delay, in service order (§2.4).
const cardMotion = [
  { tilt: -2, delay: 0 },
  { tilt: 1.5, delay: 0.8 },
  { tilt: 2, delay: 1.6 },
  { tilt: -1, delay: 2.4 },
]

const onImageFocus =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

/**
 * §3.2. The notch nav is drawn by components/Layout/Header.js over the top-left
 * of this panel; both use the same container and outer padding.
 */
export default function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-[1280px] px-2.5 pt-2.5 md:px-4 md:pt-4">
      <div className="relative flex min-h-[660px] flex-col justify-end overflow-hidden rounded-panel-mobile bg-navy md:min-h-[720px] md:rounded-panel">
        {/* Desktop: the journey scene. */}
        <Reveal
          variant="zoom"
          eager
          className="absolute inset-0 hidden lg:block"
        >
          <Image
            src="/illustrations/journey.svg"
            alt="A home with a ramp, a lift-equipped van on the road, a plated meal and our center with its activity room"
            fill
            preload
            sizes="1248px"
            className="object-cover object-bottom"
          />
        </Reveal>
        {/* Phones and tablets: a 2×2 mosaic keeps all four services visible. */}
        <Reveal
          variant="zoom"
          eager
          className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1.5 bg-white lg:hidden"
        >
          {mosaic.map((m) => (
            <span key={m.src} className="relative min-h-0">
              <Image src={m.src} alt={m.alt} fill sizes="50vw" className="object-cover" />
            </span>
          ))}
        </Reveal>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,31,51,0.55)_0%,rgba(10,31,51,0.18)_38%,rgba(10,31,51,0.86)_100%)]"
        />

        {/* Floating service cards, desktop only. */}
        <Reveal
          variant="pop"
          eager
          delay={0.5}
          className="absolute top-[120px] right-10 hidden grid-cols-2 gap-4 lg:grid"
        >
          {services.map((s, i) => (
            <Float key={s.key} eager tilt={cardMotion[i].tilt} delay={cardMotion[i].delay}>
              <a
                href="#services"
                className={`flex w-[262px] items-center gap-3 rounded-card-small bg-white px-4 py-3.5 text-navy shadow-float-image ${onImageFocus}`}
              >
                <span className="relative size-12 flex-none overflow-hidden rounded-icon-tile">
                  <Image src={s.image} alt="" fill sizes="48px" className="object-cover" />
                </span>
                <span className="flex flex-col">
                  <span className="font-display text-[16px] font-semibold">{s.title}</span>
                  <span className="text-[13px] text-text-faint">{s.sub}</span>
                </span>
              </a>
            </Float>
          ))}
        </Reveal>

        <div className="relative flex flex-col gap-3.5 px-5 pb-[22px] md:gap-5 md:px-12 md:pb-11">
          <div className="flex max-w-[780px] flex-col gap-3.5 md:gap-5">
            <Reveal
              as="span"
              eager
              className="inline-flex items-center gap-2 self-start rounded-pill border border-white/35 bg-white/16 px-3 py-[7px] text-[13px] font-semibold text-white md:px-3.5 md:py-2 md:text-[14px]"
            >
              <span aria-hidden="true" className="size-2 rounded-full bg-mint-strong" />
              {launch.statusShort} · {address.city}, {address.region}
            </Reveal>
            <Reveal
              as="h1"
              eager
              delay={0.15}
              className="m-0 bg-none font-display text-[40px] leading-none font-bold tracking-[-0.02em] text-white uppercase md:text-[62px]"
            >
              Good days,
              <br />
              at home <span className="text-mint-strong">or with us.</span>
            </Reveal>
            <Reveal
              as="p"
              eager
              delay={0.3}
              className="m-0 max-w-[600px] text-[16px] leading-normal text-on-image-text md:text-[19px]"
            >
              Four services from one licensed {address.city} team: adult day health care, in-home
              care, medical transportation and nutritious meals.
            </Reveal>
            <Reveal eager delay={0.45} className="flex flex-wrap gap-3">
              <a
                href="#waitlist"
                className={`flex-1 rounded-pill bg-white p-4 text-center text-[17px] font-bold text-navy hover:bg-mint md:flex-none md:px-[26px] ${onImageFocus}`}
              >
                Join the opening waitlist
              </a>
              <a
                href="#services"
                className={`hidden rounded-pill border-2 border-white/70 px-[26px] py-3.5 text-[17px] font-semibold text-white hover:bg-white/10 md:inline-block ${onImageFocus}`}
              >
                See all four services
              </a>
            </Reveal>
          </div>
          <Reveal
            as="ul"
            eager
            delay={0.6}
            aria-label="Our four services"
            className="mt-1 grid grid-cols-2 gap-2 md:mt-2.5 md:flex md:flex-wrap"
          >
            {services.map((s) => (
              <li key={s.key} className="flex">
                <a
                  href="#services"
                  className={`flex w-full items-center gap-2 rounded-[14px] border border-white/28 bg-white/14 p-2.5 text-[13px] leading-[1.15] font-semibold text-white hover:bg-white/20 md:rounded-pill md:border-white/30 md:px-3.5 md:text-[15px] md:leading-[normal] ${onImageFocus}`}
                >
                  <span className="flex size-7 flex-none items-center justify-center rounded-lg bg-white/14 text-mint-strong md:size-auto md:bg-transparent">
                    <LineIcon name={s.icon} size={18} className="size-4 md:size-[18px]" />
                  </span>
                  {s.title}
                </a>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
