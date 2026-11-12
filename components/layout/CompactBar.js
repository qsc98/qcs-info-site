import Brand from '@/components/layout/Brand'
import MenuButton from '@/components/layout/MenuButton'
import ServicesMenu from '@/components/layout/ServicesMenu'
import { ButtonLink } from '@/components/ui/Button'
import SmartLink from '@/components/ui/SmartLink'
import cx from '@/lib/cx'

/**
 * The fixed white header bar: always on inner pages, and on the home page
 * once the notch has scrolled away. Hidden bars are inert and invisible so
 * only one Main nav is ever reachable.
 */
export default function CompactBar({
  visible,
  links,
  homeHref,
  waitlistHref,
  menuOpen,
  onOpenMenu,
}) {
  return (
    <div
      inert={!visible}
      className={cx(
        'fixed inset-x-0 top-0 z-40 border-b border-line bg-page transition-[translate,visibility] duration-300',
        visible ? 'visible translate-y-0' : 'invisible -translate-y-full'
      )}
    >
      <div className="mx-auto flex h-14 max-w-page items-center justify-between gap-4 px-3 md:px-6 lg:h-16 lg:px-10">
        <SmartLink
          href={homeHref}
          className="flex items-center gap-2 rounded-lg focus-ring lg:gap-3"
        >
          <Brand logoClassName="lg:size-10" />
        </SmartLink>
        <nav aria-label="Main" className="flex items-center gap-1.5 lg:gap-8">
          <ul className="hidden gap-[26px] lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                {link.menu ? (
                  <ServicesMenu overviewHref={link.href} />
                ) : (
                  <SmartLink
                    href={link.href}
                    className="block rounded py-2.5 text-[16px] font-semibold text-navy focus-ring hover:text-teal"
                  >
                    {link.label}
                  </SmartLink>
                )}
              </li>
            ))}
          </ul>
          <ButtonLink href={waitlistHref} variant="accent" size="xs" className="lg:hidden">
            Waitlist
          </ButtonLink>
          <ButtonLink
            href={waitlistHref}
            variant="primary"
            size="sm"
            className="hidden lg:inline-flex"
          >
            Join the waitlist
          </ButtonLink>
          <MenuButton open={menuOpen} onOpen={onOpenMenu} className="bg-grey focus-ring" />
        </nav>
      </div>
    </div>
  )
}
