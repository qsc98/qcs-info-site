'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useState, useSyncExternalStore } from 'react'

/*
 * Entrance and float motion from design/README.md §2.4, built on motion/react.
 *
 * Rules:
 * - The server HTML is the final, fully visible state. Nothing is hidden
 *   before hydration, and nothing stays hidden if JavaScript never runs.
 * - After hydration the element remounts in its animated form (a different
 *   element type, so React swaps it) and plays from its start state.
 * - prefers-reduced-motion: the static element stays. No motion at all.
 * - Eager (hero) entrances are skipped when hydration lands long after the
 *   first paint, so a slow phone never sees the hero vanish and replay.
 */

const subscribe = () => () => {}
const useHydrated = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )

const LATE_HYDRATION_MS = 1200
let lateHydration
function hydratedLate() {
  if (lateHydration === undefined) {
    const fcp = performance.getEntriesByName('first-contentful-paint')[0]
    lateHydration = fcp ? performance.now() - fcp.startTime > LATE_HYDRATION_MS : false
  }
  return lateHydration
}

function useCanAnimate(eager) {
  const hydrated = useHydrated()
  // True only for the first render of a server-rendered page (hydration);
  // false after a client-side navigation, where there is no flash to avoid.
  const [fromServer] = useState(() => !hydrated)
  const reduceMotion = useReducedMotion()
  if (!hydrated || reduceMotion) return false
  if (eager && fromServer && hydratedLate()) return false
  return true
}

const EASE_OUT = [0, 0, 0.58, 1]
const EASE_IN_OUT = [0.42, 0, 0.58, 1]
const POP_EASE = [0.2, 0.8, 0.2, 1]

const variants = {
  // pf-up: .9s ease-out, from opacity 0 and 24px lower
  up: { from: { opacity: 0, y: 24 }, to: { opacity: 1, y: 0 }, duration: 0.9, ease: EASE_OUT },
  // pf-pop: .6s, from opacity 0 at 90% scale
  pop: { from: { opacity: 0, scale: 0.9 }, to: { opacity: 1, scale: 1 }, duration: 0.6, ease: POP_EASE },
  // pf-zoom: 2.4s ease-out, from 104% scale
  zoom: { from: { scale: 1.04 }, to: { scale: 1 }, duration: 2.4, ease: EASE_OUT },
}

const inView = { once: true, amount: 0.15 }

/**
 * One-shot entrance. `eager` plays on load (hero); otherwise it plays the
 * first time the element scrolls into view.
 */
export function Reveal({ as = 'div', variant = 'up', delay = 0, eager = false, children, ...rest }) {
  const animate = useCanAnimate(eager)
  if (!animate) {
    const Tag = as
    return <Tag {...rest}>{children}</Tag>
  }
  const v = variants[variant]
  const Motion = motion[as]
  const trigger = eager ? { animate: v.to } : { whileInView: v.to, viewport: inView }
  return (
    <Motion
      initial={v.from}
      transition={{ duration: v.duration, ease: v.ease, delay }}
      {...trigger}
      {...rest}
    >
      {children}
    </Motion>
  )
}

/**
 * The `fl` float: 10px up and back over 5s, forever, with a fixed tilt.
 * With `popDelay` set it also pops in first (the stats cards' `st`).
 */
export function Float({
  as = 'div',
  tilt = 0,
  delay = 0,
  popDelay,
  eager = false,
  children,
  ...rest
}) {
  const animate = useCanAnimate(eager)
  if (!animate) {
    const Tag = as
    return <Tag {...rest}>{children}</Tag>
  }
  const pops = popDelay !== undefined
  const Motion = motion[as]
  const target = { opacity: 1, scale: 1, rotate: tilt, y: [0, -10, 0] }
  const trigger = eager ? { animate: target } : { whileInView: target, viewport: inView }
  const pop = { duration: 0.7, ease: POP_EASE, delay: popDelay ?? 0 }
  return (
    <Motion
      initial={pops ? { opacity: 0, scale: 0.9, rotate: tilt, y: 0 } : { rotate: tilt, y: 0 }}
      transition={{
        opacity: pop,
        scale: pop,
        rotate: { duration: 0 },
        y: { duration: 5, ease: EASE_IN_OUT, repeat: Infinity, delay },
      }}
      {...trigger}
      {...rest}
    >
      {children}
    </Motion>
  )
}
