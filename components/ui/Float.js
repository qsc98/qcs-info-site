'use client'

import { motion } from 'motion/react'
import useMotionAllowed from '@/hooks/useMotionAllowed'
import { EASE_IN_OUT, EASE_POP, inViewOnce } from './motionPresets'

/**
 * The `fl` float: 10px up and back over 5s, forever, at a fixed `tilt`.
 * With `popDelay` it first pops in (the stats cards' `st`). Static, with no
 * tilt, until animation is allowed.
 */
export default function Float({
  as: Tag = 'div',
  tilt = 0,
  delay = 0,
  popDelay,
  eager = false,
  ...props
}) {
  const animate = useMotionAllowed({ eager })
  if (!animate) return <Tag {...props} />

  const pops = popDelay !== undefined
  const pop = { duration: 0.7, ease: EASE_POP, delay: popDelay ?? 0 }
  const target = { opacity: 1, scale: 1, rotate: tilt, y: [0, -10, 0] }
  const trigger = eager ? { animate: target } : { whileInView: target, viewport: inViewOnce }
  const MotionTag = motion[Tag]
  return (
    <MotionTag
      initial={pops ? { opacity: 0, scale: 0.9, rotate: tilt, y: 0 } : { rotate: tilt, y: 0 }}
      transition={{
        opacity: pop,
        scale: pop,
        rotate: { duration: 0 },
        y: { duration: 5, ease: EASE_IN_OUT, repeat: Infinity, delay },
      }}
      {...trigger}
      {...props}
    />
  )
}
