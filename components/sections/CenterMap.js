import MapEmbed from '@/components/sections/MapEmbed'
import { ButtonLink } from '@/components/ui/Button'
import { directionsUrl, fullAddress } from '@/site.config'

/**
 * "Where Louisville meets the woods": a teal panel with a short invitation,
 * the live Google map (as on the contact page) rising out of it, and the
 * address with a directions link beneath (design/README.md §3.6). Nothing
 * covers the map's foot, so Google's logo and credits stay visible.
 */
export default function CenterMap() {
  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden rounded-t-block bg-teal px-6 pt-6 pb-14 text-white md:px-7 md:pt-7">
        <span
          aria-hidden="true"
          className="absolute -top-10 -right-10 size-44 rounded-full bg-mint-strong/20"
        />
        <h3 className="relative font-display text-[27px] leading-none font-bold tracking-[-0.02em] uppercase md:text-[34px]">
          Where Louisville
          <br />
          <span className="text-mint-strong">meets the woods.</span>
        </h3>
        <p className="relative mt-3 text-[15px] leading-normal text-pretty text-on-teal-muted">
          Our center sits in a quiet, leafy corner of Louisville, with Jefferson Memorial Forest,
          the country’s largest municipal urban forest, just down the road.
        </p>
      </div>
      <span className="relative mx-3.5 -mt-9 block aspect-[4/3] overflow-hidden rounded-block border-[6px] border-white bg-mint shadow-avatar">
        <MapEmbed className="absolute inset-0" />
      </span>
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 pt-4">
        <address className="text-[14px] text-text-muted not-italic">{fullAddress}</address>
        <ButtonLink href={directionsUrl} target="_blank" rel="noopener noreferrer" size="sm">
          Get directions
        </ButtonLink>
      </div>
    </div>
  )
}
