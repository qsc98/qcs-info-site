import { useEffect, useState } from 'react'

/**
 * Whether an element intersects the viewport.
 *
 * @param {React.RefObject<Element> | string} target A ref, or the id of an
 *   element rendered elsewhere on the page.
 * @param {{ enabled?: boolean, initial?: boolean }} [options]
 */
export default function useInView(target, { enabled = true, initial = false } = {}) {
  const [inView, setInView] = useState(initial)

  useEffect(() => {
    if (!enabled) return
    const element = typeof target === 'string' ? document.getElementById(target) : target.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting))
    observer.observe(element)
    return () => observer.disconnect()
  }, [target, enabled])

  return inView
}
