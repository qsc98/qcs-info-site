import { hoursLabel } from '@/site.config'

const adultDayCare = {
  key: 'adhc',
  meta: {
    title: 'Adult Day Health Care',
    description:
      'Safe, structured daytime care for adults in Fairdale, KY: activities, meals, wellness checks, transportation and respite for caregivers.',
    path: '/adult-day-care',
  },
  hero: {
    title: ['Safe, structured days', 'with heart'],
    lead: 'Supervised days in a safe, enriching setting: memory games, gentle exercise, conversation and creative activities, with a nurse on site. The person enjoys a full day; the caregiver gets dependable respite.',
    imageAlt: 'Sunlit activity room with a round table, chairs, plants and a bookshelf',
    facts: [
      `Hours: ${hoursLabel()}`,
      'Wheelchair-friendly',
      'Transportation available',
      'Licensed, trained team',
    ],
  },
  included: {
    title: ['Everything in', 'the day'],
    intro: 'Social time, wellness checks, meals and rides, coordinated by one care team.',
    cards: [
      {
        icon: 'people',
        title: 'Social and cognitive',
        items: [
          'Arts, crafts, music and group games',
          'Conversation circles and reminiscence',
          'Memory support activities',
        ],
      },
      {
        icon: 'heart',
        title: 'Wellness and care',
        items: [
          'Chair fitness and safe movement',
          'Medication reminders and wellness checks',
          'Calm, monitored spaces to rest',
        ],
      },
      {
        icon: 'meal',
        title: 'Nutritious meals',
        items: [
          'Breakfast, lunch and snacks',
          'Diabetic, low-sodium and allergy-aware',
          'Drinks offered through the day',
        ],
      },
      {
        icon: 'van',
        title: 'Door-to-door rides',
        text: 'Wheelchair-accessible round trips for eligible participants in our service area, with trained drivers. We confirm routes and timing on your tour.',
      },
    ],
  },
  audience: {
    title: ['Who thrives', 'here'],
    intro:
      'Adults who benefit from supervision, company or help during the day, and the people who look after them.',
    items: [
      'Adults 55+ who want company and a structured day',
      'People with mild memory changes or early dementia',
      'People who need light mobility help or wheelchair access',
      'Anyone rebuilding strength after a hospital stay or illness',
      'Family caregivers who need dependable daytime respite',
    ],
  },
  rhythm: {
    title: ['A day,', 'start to finish'],
    intro: 'Hours are announced at opening. Full and partial days are planned.',
    steps: [
      {
        title: 'Arrival',
        text: 'A warm welcome, a light breakfast, a wellness check and time to settle in.',
      },
      {
        title: 'Programs',
        text: 'Group activities, memory games, music and art, chair fitness, and lunch together.',
      },
      {
        title: 'Wind-down',
        text: 'Quiet time and music, then assisted departures with a note for the family.',
      },
    ],
  },
  highlights: {
    eyebrow: 'Why it helps',
    title: ['Good for the person,', 'good for the family'],
    cards: [
      {
        icon: 'people',
        title: 'Connection and joy',
        text: 'Friendships, conversation and group activities ease isolation and lift mood.',
      },
      {
        icon: 'sparkle',
        title: 'An engaged mind',
        text: 'Memory games, music and creative work support attention and recall.',
      },
      {
        icon: 'heart',
        title: 'Mobility and energy',
        text: 'Chair fitness, stretching and safe movement help keep strength and balance.',
      },
      {
        icon: 'meal',
        title: 'Nutrition and hydration',
        text: 'Balanced meals and snacks, and drinks offered through the day.',
      },
      {
        icon: 'shield',
        title: 'Safety and supervision',
        text: 'A trained team in a secure space laid out to prevent falls.',
      },
      {
        icon: 'clock',
        title: 'Time for the caregiver',
        text: 'Hours to work, rest or run errands, with an update at pickup.',
      },
    ],
  },
  standards: {
    title: ['Health and', 'safety'],
    intro:
      'Trained staff, clear procedures and a purpose-built space. Ask to see the full checklist on your tour.',
    cards: [
      {
        icon: 'clipboard',
        title: 'Licensed and trained',
        items: [
          'Licensed for adult day health care',
          'CPR, first aid and dementia-aware training',
          'Yearly competencies and refreshers',
        ],
      },
      {
        icon: 'shield',
        title: 'A secure space',
        items: [
          'Check-in, check-out and ID badges',
          'Monitored rooms and clear signs',
          'Fall-reduction layout and rest areas',
        ],
      },
      {
        icon: 'heart',
        title: 'Health and hygiene',
        items: [
          'Scheduled cleaning and sanitizing',
          'Safe meal service',
          'Medication reminders and wellness checks',
        ],
      },
      {
        icon: 'book',
        title: 'Ready for emergencies',
        items: [
          'Written procedures and regular drills',
          'Incidents reported to the family',
          'Care plans aligned with providers',
        ],
      },
    ],
  },
  paying: {
    intro: 'Rates are published at opening. We help you find the programs that lower the cost.',
    options: [
      { name: 'Private pay', detail: 'Full-day and half-day rates, published at opening.' },
      {
        name: 'Long-term care insurance',
        detail: 'Many policies cover adult day services; we help verify coverage and file claims.',
      },
      {
        name: 'Veterans benefits',
        detail:
          'VA programs, including Aid and Attendance, may help eligible veterans and spouses.',
      },
      {
        name: 'Local assistance',
        detail: 'Where community grants or sliding-scale help exist, we connect you to them.',
      },
    ],
    help: [
      'A clear estimate based on needs and schedule',
      'Checks for Medicaid waivers, VA and long-term care',
      'Letters and invoices for claims',
      'A start date once funding is in place',
    ],
    note: 'Eligibility and coverage vary by program and policy.',
  },
  faq: {
    intro: 'Quick answers to what families ask most.',
    items: [
      {
        q: 'Who is adult day health care for?',
        a: 'Adults who benefit from supervision, company or help with daily activities, including people with mild memory or mobility changes.',
      },
      {
        q: 'What happens during a typical day?',
        a: 'A welcome and breakfast, group activities and wellness, lunch and social time, then a calm wrap-up and departures with an update for the family.',
      },
      {
        q: 'Do you handle special diets and allergies?',
        a: 'Yes: diabetic-friendly, low-sodium and texture-modified meals, with allergies carefully managed.',
      },
      {
        q: 'Is transportation available?',
        a: 'Yes. Wheelchair-accessible rides within our service area; we confirm routes and timing on your tour.',
      },
      {
        q: 'How are medications handled?',
        a: 'Following state guidelines and our policy, the team gives medication reminders and records them against the care plan.',
      },
      {
        q: 'What does it cost?',
        a: 'Rates are published at opening. We help you check Medicaid waivers, VA benefits, long-term care insurance and local assistance.',
      },
    ],
  },
}

export default adultDayCare
