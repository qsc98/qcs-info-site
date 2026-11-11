import services from '@/lib/services'

/** Home page sections linked from the header. `id` is the anchor on `/`. */
export const sectionLinks = [
  { label: 'Services', id: 'services' },
  { label: 'Why us', id: 'why' },
  { label: 'Who qualifies', id: 'who' },
  { label: 'Our center', id: 'center' },
]

/** On the home page link to the anchor directly; elsewhere go via `/`. */
export const sectionHref = (id, isHome) => (isHome ? `#${id}` : `/#${id}`)

export const serviceLinks = services.map(({ title, href }) => ({ label: title, href }))

export const companyLinks = [
  { label: 'About us', href: '/about-us' },
  { label: 'Our center', href: '/our-center' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

// The design also lists a "Nondiscrimination notice". It is left out until
// that page exists, so the footer never links to a 404.
export const legalLinks = [
  { label: 'Privacy policy', href: '/privacy-policy' },
  { label: 'Terms of service', href: '/terms-of-service' },
]
