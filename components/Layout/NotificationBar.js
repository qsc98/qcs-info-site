import MapPinIcon from '@heroicons/react/24/solid/MapPinIcon'
import siteConfig, { fullAddress } from '../../site.config'

const barClasses = 'w-full bg-linear-to-r from-[#0a1a2f] via-[#0f2b45] to-[#0a1a2f] text-white'

const NotificationBar = () => {
  return (
    <div className={barClasses}>
      {/* Mobile: name + short status, single line */}
      <div className="flex items-center justify-between gap-3 px-4 py-2 text-sm lg:hidden">
        <span className="truncate font-semibold">{siteConfig.name}</span>
        <span className="shrink-0 rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-semibold tracking-wide uppercase">
          {siteConfig.launch.statusShort}
        </span>
      </div>
      {/* Desktop: address | name | status line */}
      <div className="mx-auto hidden w-full max-w-7xl items-center justify-between gap-6 px-4 py-2 text-sm lg:flex">
        <div className="flex flex-1 items-center gap-2 text-white/90">
          <MapPinIcon className="size-4" aria-hidden="true" />
          <span>{fullAddress}</span>
        </div>
        <div className="flex flex-1 items-center justify-center text-center">
          <span className="text-xs font-semibold tracking-[0.3em] whitespace-nowrap text-white/90 uppercase">
            {siteConfig.name} • {siteConfig.descriptor}
          </span>
        </div>
        <div className="flex flex-1 items-center justify-end text-right text-white/90">
          <span>{siteConfig.launch.statusLine}</span>
        </div>
      </div>
    </div>
  )
}

export default NotificationBar
