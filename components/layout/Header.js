'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import CompactBar from '@/components/layout/CompactBar'
import MenuSheet from '@/components/layout/MenuSheet'
import NotchNav from '@/components/layout/NotchNav'
import useInView from '@/hooks/useInView'
import { sectionHref, sectionLinks } from '@/lib/navigation'

/**
 * Site header (design/README.md §3.1). On the home page the notch nav sits
 * on the hero until it scrolls away, then the compact bar takes over; inner
 * pages always use the compact bar. Both open the same menu sheet.
 *
 * While the sheet is open, <html data-menu="open"> lets page-level fixed UI
 * (the home sticky bar) step aside.
 */
export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  // The menu belongs to the page it was opened on, so navigating closes it.
  const [menuPath, setMenuPath] = useState(null)
  const menuOpen = menuPath === pathname
  const openMenu = () => setMenuPath(pathname)
  const closeMenu = () => setMenuPath(null)

  const notchRef = useRef(null)
  const notchInView = useInView(notchRef, { enabled: isHome, initial: true })
  const compact = !isHome || !notchInView

  useEffect(() => {
    if (!menuOpen) return
    document.documentElement.dataset.menu = 'open'
    return () => delete document.documentElement.dataset.menu
  }, [menuOpen])

  const links = sectionLinks.map((link) => ({ ...link, href: sectionHref(link.id, isHome) }))
  // The waitlist form is in the footer, so it is on every page.
  const waitlistHref = '#waitlist'

  return (
    <header>
      {isHome ? (
        <NotchNav
          ref={notchRef}
          links={links}
          inert={compact}
          menuOpen={menuOpen}
          onOpenMenu={openMenu}
        />
      ) : null}
      <CompactBar
        visible={compact}
        links={links}
        homeHref={isHome ? '#top' : '/'}
        waitlistHref={waitlistHref}
        menuOpen={menuOpen}
        onOpenMenu={openMenu}
      />
      <MenuSheet open={menuOpen} onClose={closeMenu} links={links} waitlistHref={waitlistHref} />
    </header>
  )
}
