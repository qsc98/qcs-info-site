import Brand from '@/components/layout/Brand'
import { heroFrame } from '@/components/layout/heroFrame'
import MenuButton from '@/components/layout/MenuButton'
import ServicesMenu from '@/components/layout/ServicesMenu'
import { ButtonLink } from '@/components/ui/Button'
import SmartLink from '@/components/ui/SmartLink'

// A 20px (28px desktop) square whose page-colored corner, outside a quarter
// circle, makes the tab look cut into the image (design/README.md §3.1).
const concaveCorner =
  'absolute size-5 bg-[radial-gradient(circle_at_100%_100%,transparent_20px,var(--color-page)_20px)] lg:size-7 lg:bg-[radial-gradient(circle_at_100%_100%,transparent_28px,var(--color-page)_28px)]'

/**
 * Home only: the page-colored logo tab carved into the hero's top-left corner,
 * with white links and CTA on the image. Positioned over the hero panel
 * using the same frame (heroFrame), so it scrolls away with it.
 */
export default function NotchNav({ ref, links, inert, menuOpen, onOpenMenu }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20">
      <div className={heroFrame}>
        <div ref={ref} inert={inert} className="relative h-14 lg:h-[68px]">
          <a
            href="#top"
            className="pointer-events-auto absolute top-0 left-0 flex h-14 items-center gap-2 rounded-br-[20px] bg-page pr-[18px] pb-2 pl-1.5 focus-ring lg:h-[68px] lg:gap-3 lg:rounded-br-[28px] lg:pr-[30px] lg:pb-3 lg:pl-2.5"
          >
            <Brand logoClassName="lg:size-11" />
            <span aria-hidden="true" className={`${concaveCorner} top-0 left-full`} />
            <span aria-hidden="true" className={`${concaveCorner} top-full left-0`} />
          </a>

          <nav
            aria-label="Main"
            className="pointer-events-auto absolute top-2.5 right-3 flex items-center gap-1.5 lg:top-3.5 lg:right-7 lg:gap-8"
          >
            <ul className="hidden gap-[26px] lg:flex">
              {links.map((link) => (
                <li key={link.href}>
                  {link.menu ? (
                    <ServicesMenu overviewHref={link.href} tone="inverse" />
                  ) : (
                    <SmartLink
                      href={link.href}
                      className="block rounded py-2.5 text-[16px] font-semibold text-white focus-ring-inverse hover:text-mint-strong"
                    >
                      {link.label}
                    </SmartLink>
                  )}
                </li>
              ))}
            </ul>
            <ButtonLink href="#waitlist" variant="inverse" size="xs" className="lg:hidden">
              Waitlist
            </ButtonLink>
            <ButtonLink
              href="#waitlist"
              variant="inverse"
              size="sm"
              className="hidden lg:inline-flex"
            >
              Join the waitlist
            </ButtonLink>
            <MenuButton
              open={menuOpen}
              onOpen={onOpenMenu}
              className="bg-white focus-ring-inverse"
            />
          </nav>
        </div>
      </div>
    </div>
  )
}
