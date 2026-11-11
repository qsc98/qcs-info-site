import siteConfig from '@/site.config'

const words = siteConfig.name.split(' ')
const half = Math.ceil(words.length / 2)
const firstLine = words.slice(0, half).join(' ')
const secondLine = words.slice(half).join(' ')

/**
 * The business name from config. With `breakClassName` it breaks over two
 * lines; the class goes on the <br>, so `lg:hidden` keeps it on one line on
 * desktop.
 */
export default function Wordmark({ breakClassName, className }) {
  if (breakClassName === undefined) return <span className={className}>{siteConfig.name}</span>
  return (
    <span className={className}>
      {firstLine} <br className={breakClassName} />
      {secondLine}
    </span>
  )
}
