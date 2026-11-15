import cx from '@/lib/cx'

/*
 * A page section inside the 1280px container (design/README.md §2.3).
 * `content` sections carry the standard section padding; `panel` sections
 * hold a rounded panel that sits 10px (phone) or 16px (desktop) from the
 * viewport edge. `none` leaves padding to the caller.
 */
const spacing = {
  content: 'px-5 py-9 md:px-10 md:py-[72px]',
  panel: 'px-2.5 pt-2.5 md:px-4 md:pt-0 md:pb-6',
  none: '',
}

export default function Section({ spacing: space = 'content', className, children, ...props }) {
  return (
    <section className={cx('mx-auto w-full max-w-page', spacing[space], className)} {...props}>
      {children}
    </section>
  )
}
