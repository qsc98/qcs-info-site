/**
 * Single source of truth for business facts and launch state.
 * Every component reads from here. At launch, change `launch.status`,
 * fill in `contact.phone` and `hours`, and nothing else needs editing.
 */
const siteConfig = {
  // Public-facing name used in titles, schema and copy. Confirm against the
  // legal/DBA name before launch; change it here only.
  name: 'Quality Senior Care',
  legalName: 'Quality Senior Care',
  descriptor: 'Adult Day Health Care', // what we are, in plain words
  shortName: 'QSC',
  url: 'https://qualityseniorcare.org',
  description:
    'Adult Day Health Care center in Fairdale, Kentucky, serving Louisville-area families with daytime care, nutritious meals, transportation and in-home support.',

  address: {
    street: '811 Mt Holly Rd',
    city: 'Fairdale',
    region: 'KY',
    postalCode: '40118',
    country: 'US',
    // Approximate coordinates for the address (used in LocalBusiness schema).
    latitude: 38.1011,
    longitude: -85.7678,
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.9570945952433!2d-85.76777598467997!3d38.101059779704754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690a13eb7b6d61%3A0xa6a2aa35a4d7c4ec!2s811%20Mt%20Holly%20Rd%2C%20Fairdale%2C%20KY%2040118!5e0!3m2!1sen!2sus!4v1629860414313!5m2!1sen!2sus',
  },
  serviceArea: ['Fairdale', 'Louisville', 'Jefferson County, KY'],

  contact: {
    phone: null, // e.g. '+15025551234' once operational
    phoneDisplay: null, // e.g. '(502) 555-1234'
    email: 'admin@qualityseniorcare.org',
    careersEmail: 'admin@qualityseniorcare.org',
  },

  // null until operational. Shape when set: [{ days: 'Monday–Saturday', open: '7:00 AM', close: '7:00 PM' }]
  hours: null,
  hoursNote: 'Hours will be announced when we open.',

  // Social profiles: only real URLs here. Empty object = no icons rendered.
  social: {},

  launch: {
    // 'pre-launch' | 'open'
    status: 'pre-launch',
    licensed: true, // state ADHC licensure received
    medicaid: 'enrolling', // 'enrolling' | 'enrolled'
    // Free-text status line shown site-wide while pre-launch.
    statusLine: 'Licensed by the Commonwealth of Kentucky. Opening soon — Medicaid provider enrollment in progress.',
    waitlist: true, // show the "notify me when we open" form
  },

  payment: {
    accepted: ['Private pay', 'Long-term care insurance', 'Veterans benefits'],
    pending: ['Kentucky Medicaid (enrollment in progress)'],
  },
}

export const isOpen = siteConfig.launch.status === 'open'
export const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`

export default siteConfig
