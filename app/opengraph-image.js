import { ImageResponse } from 'next/og'
import siteConfig from '../site.config'

export const dynamic = 'force-static'
export const alt = `${siteConfig.name} — ${siteConfig.descriptor} in ${siteConfig.address.city}, ${siteConfig.address.region}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px',
          background: 'linear-gradient(135deg, #1a4566 0%, #116768 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: 'uppercase', opacity: 0.85 }}>
          {siteConfig.descriptor}
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 20, lineHeight: 1.05 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 34, marginTop: 28, opacity: 0.9 }}>
          {`${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`}
        </div>
        <div style={{ fontSize: 26, marginTop: 40, opacity: 0.8 }}>{siteConfig.launch.statusShort}</div>
      </div>
    ),
    { ...size }
  )
}
