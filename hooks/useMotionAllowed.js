import { useReducedMotion } from 'motion/react'
import { useState } from 'react'
import useHydrated from '@/hooks/useHydrated'

// Past this gap between first paint and hydration, replaying an above-the-fold
// entrance would make visible content vanish and come back.
const LATE_HYDRATION_MS = 1200

let lateHydration
function hydratedLate() {
  if (lateHydration === undefined) {
    const fcp = performance.getEntriesByName('first-contentful-paint')[0]
    lateHydration = fcp ? performance.now() - fcp.startTime > LATE_HYDRATION_MS : false
  }
  return lateHydration
}

/**
 * Whether an element may animate. Never on the server (the HTML must be the
 * final, visible state), never under prefers-reduced-motion, and for
 * `eager` (above-the-fold) entrances, not when hydration landed late.
 */
export default function useMotionAllowed({ eager = false } = {}) {
  const hydrated = useHydrated()
  // True only for the render that hydrates server HTML; false after a
  // client-side navigation, where there is nothing visible to replay.
  const [fromServer] = useState(() => !hydrated)
  const reduceMotion = useReducedMotion()
  if (!hydrated || reduceMotion) return false
  if (eager && fromServer && hydratedLate()) return false
  return true
}
