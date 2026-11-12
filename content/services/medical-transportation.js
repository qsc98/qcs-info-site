const medicalTransportation = {
  key: 'transport',
  meta: {
    title: 'Medical Transportation',
    description:
      'Wheelchair-accessible, door-to-door rides to medical appointments and our day center in the Louisville, KY area.',
    path: '/medical-transportation',
  },
  hero: {
    title: ['Door-to-door rides\n', 'you can trust'],
    lead: 'Safe, on-time rides to appointments, to our center and for everyday errands, in wheelchair-accessible vans with trained drivers who help curb-to-curb or door-through-door.',
    imageAlt: 'A teal lift-equipped van with its ramp down on Mt Holly Road',
    facts: [
      { label: 'Book a day ahead', icon: 'calendar' },
      { label: 'Louisville metro and nearby', icon: 'pin' },
      { label: 'Lift-equipped vans', icon: 'van' },
      { label: 'Trained, insured drivers', icon: 'shield' },
    ],
  },
  included: {
    title: ['Every ride,', 'door to door'],
    intro: 'Medical visits, treatments and the errands that keep a week running.',
    cards: [
      {
        icon: 'route',
        title: 'Appointments and treatment',
        items: [
          'Primary care and specialist visits',
          'Dialysis and infusion centers',
          'Physical and occupational therapy',
        ],
      },
      {
        icon: 'route',
        title: 'Errands and essentials',
        items: ['Pharmacies and labs', 'Our adult day center', 'Pickup when leaving hospital'],
      },
      {
        icon: 'heart',
        title: 'Help at both ends',
        text: 'Curb-to-curb or door-through-door: tell us what is needed when you book.',
      },
      {
        icon: 'clock',
        title: 'Wait and return',
        text: 'The driver can wait during the appointment; we confirm timing before the trip.',
      },
    ],
  },
  audience: {
    title: ['Who rides', 'with us'],
    intro: 'Anyone who needs a safe, patient ride to care.',
    items: [
      'People who no longer drive, or should not drive to treatment',
      'Wheelchair and walker users',
      'People heading home after a hospital stay',
      'Participants coming to our adult day center',
    ],
  },
  rhythm: {
    title: ['How to', 'book a ride'],
    intro: 'Book at least a day ahead; same-day rides depend on availability.',
    steps: [
      {
        title: 'Request a ride',
        text: 'Tell us the pickup window, the destination and whether it is a round trip.',
      },
      {
        title: 'Share mobility needs',
        text: 'A wheelchair or walker, help to the door, a companion riding along: we plan for it.',
      },
      {
        title: 'Confirm the details',
        text: 'We confirm the pickup time, vehicle access and any wait-and-return.',
      },
    ],
  },
  highlights: {
    id: 'ride-ready',
    eyebrow: 'Before ride day',
    title: ['What to', 'have ready'],
    cards: [
      {
        icon: 'clipboard',
        title: 'Have these handy',
        items: [
          'Pickup and drop-off addresses, and which entrance',
          'Appointment time and a contact at the destination',
          'Mobility needs: wheelchair, walker, help to the door',
          'The name of anyone riding along',
        ],
      },
      {
        icon: 'chat',
        title: 'Special requests',
        text: 'A driver who speaks your language, one you have ridden with before, or a cultural or faith-based need: tell us and we will do our best to honor it.',
      },
    ],
  },
  standards: {
    title: ['Safety and', 'accessibility'],
    intro: 'Clear procedures, well-equipped vans and patient help at every step.',
    cards: [
      {
        icon: 'people',
        title: 'Senior-aware drivers',
        items: [
          'Trained for mobility and dementia support',
          'Help to the door and safe transfers',
          'A respectful, unhurried pace',
        ],
      },
      {
        icon: 'van',
        title: 'Comfortable rides',
        items: [
          'Wheelchair lifts and secure restraints',
          'Room for walkers and other devices',
          'A companion can ride along',
        ],
      },
      {
        icon: 'clipboard',
        title: 'Clear procedures',
        items: [
          'Route and timing confirmed',
          'Curb-to-curb or door-through-door',
          'Wait-and-return available',
        ],
      },
      {
        icon: 'shield',
        title: 'Vetted and insured',
        items: [
          'Background and driving-record checks',
          'Commercial insurance',
          'Regular vehicle inspections',
        ],
      },
      {
        icon: 'sparkle',
        title: 'Clean vans',
        items: [
          'Cleaned between rides',
          'Seatbelts, grips and secure flooring',
          'Incidents reported and followed up',
        ],
      },
      {
        icon: 'sun',
        title: 'Comfort in any weather',
        items: [
          'Climate control all year',
          'Drivers watch for weather delays',
          'Water on longer rides',
        ],
      },
    ],
  },
  faq: {
    intro: 'Coverage, accessibility and what to expect on ride day.',
    items: [
      {
        q: 'How far ahead should I book?',
        a: 'We recommend a day ahead. Same-day rides may be possible, depending on drivers.',
      },
      {
        q: 'Do you offer door-through-door help?',
        a: 'Yes. Tell us when you book if help is needed from inside the home to the van, or from the van into the destination.',
      },
      {
        q: 'Do your vans take wheelchairs?',
        a: 'Our vans are lift-equipped, with wheelchair securements and room for walkers and other devices.',
      },
      {
        q: 'Can a family member ride along?',
        a: 'Yes, one companion can ride along. Share their name when you book so we can plan seating.',
      },
      {
        q: 'Will the driver wait during the appointment?',
        a: 'Yes, wait-and-return rides are available. We confirm the expected length and any extra charge before the trip.',
      },
      {
        q: 'What if the appointment runs long?',
        a: 'Let us know and we adjust the pickup. Clinic delays happen; we plan for them.',
      },
    ],
  },
}

export default medicalTransportation
