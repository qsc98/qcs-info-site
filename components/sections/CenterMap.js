import Image from 'next/image'
import IconTile from '@/components/ui/IconTile'
import siteConfig, { fullAddress } from '@/site.config'

/**
 * The map illustration with the address card (design/README.md §3.6). A
 * live map embed can later sit behind the same card, keeping this image as
 * the no-JS state. `footer` replaces the card's last line.
 */
export default function CenterMap({ footer = 'Tours begin when we open →' }) {
  return (
    <div className="relative">
      <span className="relative block aspect-[4/3] overflow-hidden rounded-block md:aspect-square">
        <Image
          src="/illustrations/map.svg"
          alt={`Map showing our center at ${fullAddress}`}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover"
        />
      </span>
      <span className="absolute inset-x-4 bottom-4 flex items-center gap-3.5 rounded-card-small bg-white px-4 py-3.5 shadow-card-light">
        <IconTile name="pin" size="md" />
        <span className="flex min-w-0 flex-col gap-0.5">
          <span className="font-display text-[15px] font-semibold text-navy md:text-[17px]">
            Our center in {siteConfig.address.city}
          </span>
          <address className="text-[13px] text-text-muted not-italic md:text-[14px]">
            {fullAddress}
          </address>
          <span className="text-[13px] font-bold text-teal">{footer}</span>
        </span>
      </span>
    </div>
  )
}
