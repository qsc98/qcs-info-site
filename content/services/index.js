/**
 * The four services, in their fixed order. They carry equal weight
 * everywhere: hero pills, hero cards, the services grid and the footer.
 */
const services = [
  {
    key: 'adhc',
    number: '01',
    title: 'Adult Day Health Care',
    href: '/adult-day-care',
    image: '/photos/service-adult-day-care.jpg',
    icon: 'sun',
    sub: 'Days at our center',
    line: 'Supervised, structured days with activities, nursing checks and lunch.',
  },
  {
    key: 'home',
    number: '02',
    title: 'In-Home Care',
    href: '/in-home-care',
    image: '/photos/service-in-home-care.jpg',
    icon: 'heart',
    sub: 'Care where you live',
    line: 'Personal care and companionship at home, hourly to overnight.',
  },
  {
    key: 'transport',
    number: '03',
    title: 'Medical Transportation',
    href: '/medical-transportation',
    image: '/photos/service-medical-transportation.jpg',
    icon: 'van',
    sub: 'Lift-equipped rides',
    line: 'Door-through-door rides to appointments and to our center.',
  },
  {
    key: 'meals',
    number: '04',
    title: 'Nutritious Meals',
    href: '/nutritious-meals',
    image: '/photos/service-nutritious-meals.jpg',
    icon: 'meal',
    sub: 'Made for real diets',
    line: 'Breakfast, lunch and snacks; diabetic, low-sodium and allergy-aware.',
  },
]

export default services
