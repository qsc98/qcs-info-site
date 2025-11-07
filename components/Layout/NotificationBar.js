// components/NotificationBar.js
import MapPinIcon from '@heroicons/react/24/solid/MapPinIcon'

const NotificationBar = () => {
  return (
  <div className="hidden w-full bg-deepnavy px-4 py-2 text-sm text-white lg:flex">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between gap-6">
        {/* Left: Address */}
        <div className="flex flex-1 items-center gap-1">
          <MapPinIcon className="h-4 w-4" />
          <span>811 Mt Holly Rd, Fairdale, KY 40118</span>
        </div>

        {/* Center: Welcome message */}
        <div className="flex flex-1 items-center justify-center text-center">
          <span className="text-base">Welcome! 🙂</span>
        </div>

        {/* Right: Opening notice */}
        <div className="flex flex-1 items-center justify-end gap-3">
          <span className="whitespace-nowrap">
            Opening soon—pending state licensure.
          </span>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-black shadow transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default NotificationBar
