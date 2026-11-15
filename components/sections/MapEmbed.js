import cx from '@/lib/cx'
import siteConfig, { fullAddress } from '@/site.config'

/**
 * The center on a live Google map, filling its parent. It loads from Google,
 * which the privacy policy discloses; `loading="lazy"` waits until it is near
 * the viewport.
 */
export default function MapEmbed({ className }) {
  return (
    <iframe
      src={siteConfig.address.mapsEmbedUrl}
      title={`Google map showing our center at ${fullAddress}`}
      loading="lazy"
      allowFullScreen
      className={cx('block size-full border-0', className)}
    />
  )
}
