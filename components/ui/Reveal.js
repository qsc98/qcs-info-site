'use client'

import { motion } from 'motion/react'
import useMotionAllowed from '@/hooks/useMotionAllowed'
import { entrances, inViewOnce } from './motionPresets'

/**
 * One-shot entrance (`up`, `pop` or `zoom`). `eager` plays on load, for the
 * hero; otherwise it plays the first time the element scrolls into view.
 *
 * Renders the plain element until animation is allowed (see
 * useMotionAllowed), so the server HTML is always the visible end state.
 * The switch to the motion element is a different element type, so React
 * remounts it and the entrance starts from its `from` state.
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  eager = false,
  ...props
}) {
  const animate = useMotionAllowed({ eager })
  if (!animate) return <Tag {...props} />

  const { from, to, duration, ease } = entrances[variant]
  const MotionTag = motion[Tag]
  const trigger = eager ? { animate: to } : { whileInView: to, viewport: inViewOnce }
  return <MotionTag initial={from} transition={{ duration, ease, delay }} {...trigger} {...props} />
}
