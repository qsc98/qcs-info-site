import FeatureCard from '@/components/ui/FeatureCard'
import Reveal from '@/components/ui/Reveal'
import cx from '@/lib/cx'

// Two or four cards fill a row; three and six read best three across.
function columnsFor(count) {
  if (count === 2) return 'md:grid-cols-2'
  if (count === 4) return 'md:grid-cols-2 lg:grid-cols-4'
  return 'md:grid-cols-2 lg:grid-cols-3'
}

/** FeatureCards in a responsive grid. `cards` are FeatureCard props. */
export default function CardGrid({ cards }) {
  return (
    <ul className={cx('grid gap-3 md:gap-5', columnsFor(cards.length))}>
      {cards.map((card, i) => (
        <Reveal as="li" key={card.title} delay={(i % 4) * 0.08}>
          <FeatureCard {...card} />
        </Reveal>
      ))}
    </ul>
  )
}
