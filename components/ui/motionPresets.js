/* Timings from design/README.md §2.4, as motion/react transitions. */

export const EASE_OUT = [0, 0, 0.58, 1]
export const EASE_IN_OUT = [0.42, 0, 0.58, 1]
export const EASE_POP = [0.2, 0.8, 0.2, 1]

export const entrances = {
  // pf-up
  up: { from: { opacity: 0, y: 24 }, to: { opacity: 1, y: 0 }, duration: 0.9, ease: EASE_OUT },
  // pf-pop
  pop: {
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1 },
    duration: 0.6,
    ease: EASE_POP,
  },
  // pf-zoom
  zoom: { from: { scale: 1.04 }, to: { scale: 1 }, duration: 2.4, ease: EASE_OUT },
}

// Scroll-triggered entrances play once, as soon as a little of the element shows.
export const inViewOnce = { once: true, amount: 0.15 }
