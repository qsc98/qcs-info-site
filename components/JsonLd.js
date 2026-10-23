import siteConfig from '../site.config'

/** LocalBusiness structured data, built from site.config so NAP never drifts. */
export default function JsonLd() {
  const c = siteConfig
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${c.url}/#business`,
    name: c.name,
    legalName: c.legalName,
    alternateName: c.alternateNames,
    description: c.description,
    url: c.url,
    image: `${c.url}/icons/icon-512.png`,
    logo: `${c.url}/icons/icon-512.png`,
    email: c.contact.email,
    ...(c.contact.phone ? { telephone: c.contact.phone } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: c.address.street,
      addressLocality: c.address.city,
      addressRegion: c.address.region,
      postalCode: c.address.postalCode,
      addressCountry: c.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: c.address.latitude,
      longitude: c.address.longitude,
    },
    areaServed: c.serviceArea.map((name) => ({ '@type': 'Place', name })),
    paymentAccepted: c.payment.accepted.join(', '),
    ...(c.hours
      ? {
          openingHoursSpecification: c.hours.map((h) => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: h.days,
            opens: h.opens,
            closes: h.closes,
          })),
        }
      : {}),
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
