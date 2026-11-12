import Icon from '@/components/ui/Icon'
import cx from '@/lib/cx'

export const MENU_ID = 'site-menu'

/** The 44px hamburger that opens the menu sheet (below 1024px only). */
export default function MenuButton({ open, onOpen, className }) {
  return (
    <button
      type="button"
      aria-label="Open menu"
      aria-expanded={open}
      aria-controls={MENU_ID}
      aria-haspopup="dialog"
      onClick={onOpen}
      className={cx(
        'flex size-11 items-center justify-center rounded-full text-navy lg:hidden',
        className
      )}
    >
      <Icon name="menu" size={20} />
    </button>
  )
}
