import siteConfig from '@/site.config'

/**
 * A business name from config (the full `name` by default). With
 * `breakClassName` it breaks over two lines, the longer half second
 * ("Quality / Senior Care"); the class goes on the <br>, so `lg:hidden`
 * keeps it on one line on desktop.
 */
export default function Wordmark({ name = siteConfig.name, breakClassName, className }) {
  if (breakClassName === undefined) return <span className={className}>{name}</span>
  const words = name.split(' ')
  const half = Math.floor(words.length / 2)
  return (
    <span className={className}>
      {words.slice(0, half).join(' ')} <br className={breakClassName} />
      {words.slice(half).join(' ')}
    </span>
  )
}
