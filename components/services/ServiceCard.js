import Image from 'next/image'
import Link from 'next/link'
import cx from '@/lib/cx'

/**
 * A service as a linked card: illustration, number, title and one line.
 * `row` puts the illustration beside the text (home grid); `stacked` puts
 * it on top, for three-across rows.
 */
export default function ServiceCard({ service, layout = 'row' }) {
  const stacked = layout === 'stacked'
  return (
    <Link
      href={service.href}
      className={cx(
        'flex h-full w-full gap-4 rounded-card border border-line bg-white p-3.5 focus-ring transition-shadow hover:shadow-float-light',
        stacked ? 'flex-col' : 'items-center'
      )}
    >
      <span
        className={cx(
          'relative aspect-[4/3] flex-none overflow-hidden rounded-thumb',
          stacked ? 'w-full' : 'w-[110px] md:w-[180px]'
        )}
      >
        <Image
          src={service.image}
          alt=""
          fill
          sizes={stacked ? '(min-width: 1024px) 380px, 100vw' : '(min-width: 768px) 180px, 110px'}
          className="object-cover"
        />
      </span>
      <span className={cx('flex min-w-0 flex-col gap-1', stacked && 'px-1.5 pb-2')}>
        <span className="font-display text-[15px] font-semibold text-teal">{service.number}</span>
        <span className="type-card-title text-navy">{service.title}</span>
        <span className="type-card-line text-text-muted">{service.line}</span>
      </span>
    </Link>
  )
}
