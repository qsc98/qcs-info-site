/**
 * Single source of truth for business facts and launch state.
 * Every component reads from here. At launch, set `launch.status` to 'open',
 * fill in `contact.phone` / `contact.phoneDisplay` and `hours`, and nothing
 * else needs editing.
 */
const siteConfig = {
  // Public-facing name (registered DBA) used in titles, schema and copy.
  name: 'Quality Senior Health Care',
  // Other registered DBA(s); used in schema alternateName.
  alternateNames: ['Quality ADHC'],
  // Registered entity: Kentucky Secretary of State org #1366926.
  legalName: 'New Hope ADHC LLC',
  descriptor: 'Adult Day Health Care',
  url: 'https://qualityseniorcare.org',
  description:
    'Licensed Adult Day Health Care center in Fairdale, Kentucky, serving Louisville-area families with daytime care, nutritious meals, transportation and in-home support.',

  address: {
    street: '811 Mt Holly Rd',
    city: 'Fairdale',
    region: 'KY',
    postalCode: '40118',
    country: 'US',
    latitude: 38.1011,
    longitude: -85.7678,
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.9570945952433!2d-85.76777598467997!3d38.101059779704754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690a13eb7b6d61%3A0xa6a2aa35a4d7c4ec!2s811%20Mt%20Holly%20Rd%2C%20Fairdale%2C%20KY%2040118!5e0!3m2!1sen!2sus!4v1629860414313!5m2!1sen!2sus',
  },
  serviceArea: ['Fairdale', 'Louisville', 'Jefferson County, KY'],

  contact: {
    phone: null, // E.164, e.g. '+15025551234', once operational
    phoneDisplay: null, // e.g. '(502) 555-1234'
    email: 'admin@qualityseniorcare.org',
    careersEmail: 'admin@qualityseniorcare.org',
  },

  // null until operational. When set:
  // [{ days: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], label: 'Mon–Sat', opens: '07:00', closes: '19:00', opensDisplay: '7 AM', closesDisplay: '7 PM' }]
  hours: null,
  hoursNote: 'Hours will be announced when we open.',

  // Only real profile URLs here, e.g. { facebook: 'https://facebook.com/...' }.
  // Empty = no social icons rendered anywhere.
  social: {},

  launch: {
    status: 'pre-launch', // 'pre-launch' | 'open'
    licensed: true,
    medicaid: 'enrolling', // 'enrolling' | 'enrolled'
    statusShort: 'Opening soon',
    statusLine:
      'Licensed by the Commonwealth of Kentucky. Opening soon — Medicaid provider enrollment in progress.',
    waitlist: true,
  },

  payment: {
    accepted: ['Private pay', 'Long-term care insurance', 'Veterans benefits'],
    pending: ['Kentucky Medicaid (provider enrollment in progress)'],
  },
}

export const isOpen = siteConfig.launch.status === 'open'

export const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`

export function hoursSummary() {
  if (!siteConfig.hours) return 'To be announced'
  return siteConfig.hours
    .map((h) => `${h.label} • ${h.opensDisplay} – ${h.closesDisplay}`)
    .join('; ')
}

export function paymentLine() {
  const accepted = siteConfig.payment.accepted.join(', ')
  const pending = siteConfig.payment.pending.length
    ? ` • ${siteConfig.payment.pending.join(', ')}`
    : ''
  return `${accepted} accepted${pending}`
}

export default siteConfig
