'use client'

import { useReducedMotion } from 'motion/react'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((m) => m.DotLottieReact),
  { ssr: false }
)

/**
 * Lottie wrapper that (a) loads the player only on the client, (b) skips
 * mounting when its container is display:none (so responsive duplicates don't
 * run two players), and (c) respects prefers-reduced-motion.
 */
export default function LottieFigure({
  src,
  className = '',
  style,
  loop = false,
  autoplay = true,
  label = '',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const check = () => setVisible(el.offsetParent !== null)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      role={label ? 'img' : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
    >
      {visible ? (
        <DotLottieReact src={src} loop={loop} autoplay={autoplay && !reduceMotion} className="size-full" />
      ) : null}
    </div>
  )
}
