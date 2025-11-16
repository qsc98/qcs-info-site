// components/NotificationBar.js
import MapPinIcon from '@heroicons/react/24/solid/MapPinIcon'

const NotificationBar = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center bg-gradient-to-r from-[#0a1a2f] via-[#0f2b45] to-[#0a1a2f] px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white lg:hidden">
        Quality Adult Day Health Care
      </div>
      <div className="hidden w-full bg-gradient-to-r from-[#0a1a2f] via-[#0f2b45] to-[#0a1a2f] px-4 py-2 text-sm text-white lg:flex">
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-6">
          {/* Left: Address */}
          <div className="flex flex-1 items-center gap-2 text-white/80">
            <MapPinIcon className="size-4" />
            <span>811 Mt Holly Rd, Fairdale, KY 40118</span>
          </div>

          {/* Center: Brand name */}
          <div className="flex flex-1 items-center justify-center text-center">
            <span className="flex items-center gap-3 whitespace-nowrap text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white/80">
              <span className="hidden h-px w-10 bg-white/30 sm:block" aria-hidden="true" />
              Quality Adult Day Health Care
              <span className="hidden h-px w-10 bg-white/30 sm:block" aria-hidden="true" />
            </span>
          </div>

          {/* Right: Opening notice */}
          <div className="flex flex-1 items-center justify-end gap-3 text-white/80">
            <span>Opening soon—pending state licensure.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotificationBar
