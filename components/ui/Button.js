import SmartLink from '@/components/ui/SmartLink'
import cx from '@/lib/cx'

/*
 * Pill buttons (design/README.md §2.3). `inverse` and `outline-inverse` sit
 * on navy, teal or image backgrounds, so they default to the white focus
 * ring; the rest sit on light surfaces and use the teal ring.
 */
const variants = {
  primary: { fill: 'bg-navy text-white hover:bg-teal', ring: 'focus-ring' },
  accent: { fill: 'bg-teal text-white hover:bg-teal-hover', ring: 'focus-ring' },
  subtle: { fill: 'bg-grey text-navy hover:bg-mint', ring: 'focus-ring' },
  secondary: {
    fill: 'bg-white text-navy ring-1 ring-line ring-inset hover:bg-grey',
    ring: 'focus-ring',
  },
  inverse: { fill: 'bg-white text-navy hover:bg-mint', ring: 'focus-ring-inverse' },
  'outline-inverse': {
    fill: 'font-semibold text-white ring-2 ring-white/70 ring-inset hover:bg-white/10',
    ring: 'focus-ring-inverse',
  },
}

const sizes = {
  xs: 'px-3.5 py-3 text-[14px] leading-5',
  sm: 'px-5 py-3 text-[15px] leading-5',
  md: 'px-[22px] py-3.5 text-[16px]',
  lg: 'px-[26px] py-4 text-[17px]',
}

/*
 * Pass `size={null}` or `ring={null}` (or a ring of your own) when the caller
 * sets them itself, for example ones that change at a breakpoint.
 */
function buttonClasses({ variant = 'primary', size = 'md', ring, className } = {}) {
  const v = variants[variant]
  return cx('btn', v.fill, ring === undefined ? v.ring : ring, size && sizes[size], className)
}

export function ButtonLink({ href, variant, size, ring, className, ...props }) {
  return (
    <SmartLink
      href={href}
      className={buttonClasses({ variant, size, ring, className })}
      {...props}
    />
  )
}

export default function Button({ variant, size, ring, className, type = 'button', ...props }) {
  return (
    <button type={type} className={buttonClasses({ variant, size, ring, className })} {...props} />
  )
}
