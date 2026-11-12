const nutritiousMeals = {
  key: 'meals',
  meta: {
    title: 'Nutritious Meals',
    description:
      'Nutritionist-guided breakfast, lunch and snacks with diabetic, low-sodium, vegetarian and allergy-aware options.',
    path: '/nutritious-meals',
  },
  hero: {
    title: ['Daily meals with\n', 'clinical care in mind'],
    lead: 'Balanced, flavorful meals planned for older adults and people with medical needs: breakfast, lunch and snacks every day, with diabetic, low-sodium, vegetarian and allergy-aware options, on menus developed with licensed nutritionists.',
    imageAlt: 'A plated lunch seen from above on a wooden table',
    facts: [
      { label: 'Breakfast, lunch and snacks', icon: 'meal' },
      { label: 'Cooked fresh on site', icon: 'house' },
      { label: 'Vegetarian and vegan options', icon: 'leaf' },
      { label: 'Allergen-aware kitchen', icon: 'shield' },
    ],
  },
  included: {
    title: ['What’s on', 'the table'],
    intro: 'Each day is built around drinks, balanced plates and personal health goals.',
    cards: [
      {
        icon: 'meal',
        title: 'Daily service',
        items: [
          'Breakfast, lunch and snacks',
          'Water and tea through the day',
          'Seasonal, rotating menus',
        ],
      },
      {
        icon: 'leaf',
        title: 'Dietary options',
        items: [
          'Diabetic-friendly and low-sodium',
          'Vegetarian and vegan',
          'Cultural preferences honored',
        ],
      },
      {
        icon: 'sparkle',
        title: 'Quality and freshness',
        text: 'Fresh produce, lean proteins and whole grains, cooked to balance taste, nutrition and individual needs.',
      },
    ],
  },
  audience: {
    eyebrow: 'Diets we plan for',
    title: ['Made for', 'real diets'],
    intro: 'Tell us what the person needs and it goes into the care plan.',
    items: [
      'Diabetic-friendly plates and portions',
      'Low-sodium choices every day',
      'Texture-modified meals',
      'Vegetarian and vegan meals',
      'Allergies logged and kept apart',
      'Cultural and faith-based preferences',
    ],
  },
  rhythm: {
    eyebrow: 'From pantry to plate',
    title: ['How meals', 'are made'],
    steps: [
      {
        title: 'Planned',
        text: 'Menus are planned with licensed nutritionists for balanced nutrients.',
      },
      {
        title: 'Sourced',
        text: 'Trusted suppliers, with labels and allergens checked on arrival.',
      },
      {
        title: 'Served',
        text: 'Seasonal menus and sensible portions, with as little waste as we can manage.',
      },
    ],
  },
  highlights: {
    id: 'menus',
    eyebrow: 'A sample week',
    title: ['A taste of', 'the rotation'],
    intro: 'Ask for this month’s menu and we will mark what suits each diet.',
    cards: [
      {
        icon: 'sun',
        title: 'Breakfast',
        items: [
          'Oatmeal with fruit and nuts',
          'Vegetable omelets and whole-grain toast',
          'Yogurt parfaits and seasonal fruit',
        ],
      },
      {
        icon: 'meal',
        title: 'Lunch',
        items: [
          'Baked chicken and roasted vegetables',
          'Lentil stew or bean and rice bowls',
          'Grilled fish and hearty salads',
        ],
      },
      {
        icon: 'leaf',
        title: 'Snacks',
        items: [
          'Fresh fruit and cottage cheese',
          'Hummus with whole-grain crackers',
          'Mixed nuts and herbal teas',
        ],
      },
    ],
  },
  standards: {
    title: ['Food safety', 'in our kitchen'],
    intro: 'Ask on your tour and we will walk you through the full checklist.',
    cards: [
      {
        icon: 'clock',
        title: 'Temperature logs',
        items: [
          'Hot and cold holding tracked',
          'Reheating and cooling standards',
          'Equipment checks and calibration',
        ],
      },
      {
        icon: 'shield',
        title: 'Sanitizing',
        items: [
          'Scheduled surface and utensil cleaning',
          'Glove and hand-washing routines',
          'Clean, labeled storage',
        ],
      },
      {
        icon: 'leaf',
        title: 'Allergen controls',
        items: [
          'Ingredient logs and clear labels',
          'Steps to prevent cross-contact',
          'Notes in each care plan',
        ],
      },
      {
        icon: 'book',
        title: 'Training and audits',
        items: [
          'Staff certified in safe food handling',
          'Routine checks and fixes',
          'Incidents reported and followed up',
        ],
      },
    ],
  },
  paying: {
    intro:
      'Meals may be part of day services or billed on their own, depending on the plan. We help you confirm.',
    options: [
      { name: 'Private pay', detail: 'Daily or monthly meal charges, published at opening.' },
      {
        name: 'With adult day care',
        detail: 'Meals are included with adult day attendance on many plans.',
      },
      {
        name: 'Long-term care insurance',
        detail: 'Some policies cover meals as part of adult day services.',
      },
      { name: 'Local programs', detail: 'Where meal assistance exists, we connect you to it.' },
    ],
    help: [
      'Whether meals are included in your plan',
      'Checks for Medicaid waivers and long-term care',
      'Invoices and letters for claims',
      'A start date once coverage is set',
    ],
    note: 'Eligibility and coverage vary by program and policy.',
  },
  faq: {
    intro: 'Diets, preparation and drinks through the day.',
    items: [
      {
        q: 'Can you do diabetic and low-sodium diets?',
        a: 'Yes. Diabetic-friendly and low-sodium choices are on every day, and portions can follow guidance from the person’s provider.',
      },
      {
        q: 'How do you handle allergies?',
        a: 'Ingredient logs, clear labels and steps to prevent cross-contact. Tell us the allergens and we add them to the care plan.',
      },
      {
        q: 'Are there vegetarian or vegan meals?',
        a: 'Yes. We cook plant-forward meals and can make vegan versions on request.',
      },
      {
        q: 'Who designs the menus?',
        a: 'Menus are developed with licensed nutritionists and reviewed regularly for quality and balance.',
      },
      {
        q: 'Can we see a current menu?',
        a: 'Yes. Ask and we will share this month’s rotation, marked for each diet.',
      },
      {
        q: 'Are drinks part of the day?',
        a: 'Yes: water, tea and reminders to drink are part of every day.',
      },
    ],
  },
}

export default nutritiousMeals
