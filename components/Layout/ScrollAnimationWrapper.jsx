'use client'

import { motion, useReducedMotion } from 'motion/react'

/**
 * Fade/slide-in on scroll. Renders a plain div for users who prefer reduced
 * motion, and triggers early (15% visible) so tall blocks never stay hidden.
 * `eager` renders the final state immediately (use above the fold so the page
 * is never blank before hydration).
 */
export default function ScrollAnimationWrapper({ children, className, eager = false, ...props }) {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div
      initial={eager ? false : 'offscreen'}
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
