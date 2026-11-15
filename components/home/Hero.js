import Image from 'next/image'
import HeroRibbon from '@/components/home/HeroRibbon'
import { heroFrame } from '@/components/layout/heroFrame'
import { ButtonLink } from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import siteConfig, { locality } from '@/site.config'

/** §3.2. The notch nav is drawn over this panel by the header (NotchNav). */
export default function Hero() {
  return (
    <section id="top" className={heroFrame}>
      <div className="relative flex min-h-[660px] flex-col justify-end overflow-hidden rounded-panel-mobile bg-navy md:min-h-[720px] md:rounded-panel">
        <Reveal variant="zoom" eager className="absolute inset-0">
          <Image
            src="/photos/hero-arrival.jpg"
            alt="A caregiver helps a woman step down from our van outside the center while two men chat nearby"
            fill
            preload
            sizes="(min-width: 1280px) 1248px, 100vw"
            className="object-cover object-[70%_center] lg:object-center"
          />
        </Reveal>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,31,51,0.55)_0%,rgba(10,31,51,0.18)_38%,rgba(10,31,51,0.86)_100%)]"
        />

        <div className="relative flex flex-col gap-3.5 px-5 pb-7 md:gap-5 md:px-12 md:pb-10">
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
        </div>
        <Reveal eager delay={0.6} className="relative">
          <HeroRibbon />
        </Reveal>
      </div>
    </section>
  )
}
