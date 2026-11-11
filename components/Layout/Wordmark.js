import siteConfig from '../../site.config'

const words = siteConfig.name.split(' ')
const half = Math.ceil(words.length / 2)
const first = words.slice(0, half).join(' ')
const second = words.slice(half).join(' ')

/**
 * The business name from config. Pass `breakClassName` to break it over two
 * lines; the class goes on the <br>, so `lg:hidden` makes it one line on
 * desktop.
 */
export default function Wordmark({ breakClassName, className = '' }) {
  if (breakClassName === undefined) return <span className={className}>{siteConfig.name}</span>
  return (
    <span className={className}>
      {first} <br className={breakClassName} />
      {second}
    </span>
  )
}
