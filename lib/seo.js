import siteConfig from '@/site.config'

const locality = `${siteConfig.address.city}, ${siteConfig.address.region}`

export const defaultTitle = `${siteConfig.descriptor} in ${locality} | ${siteConfig.name}`

/** Build per-page metadata with consistent canonical + Open Graph. */
export function pageMetadata({ title, description, path = '/' }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: title ? `${title} | ${siteConfig.name}` : defaultTitle,
      description,
      url: path,
      type: 'website',
      siteName: siteConfig.name,
      locale: 'en_US',
    },
  }
}

export const routes = [
  '/',
  '/adult-day-care',
  '/nutritious-meals',
  '/medical-transportation',
  '/in-home-care',
  '/our-center',
  '/about-us',
  '/contact',
  '/careers',
  '/privacy-policy',
  '/terms-of-service',
]
