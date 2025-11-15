// components/GallerySection.jsx
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

/**
 * Premium Gallery Slider (fixed first/last clicks)
 * - Precise centering for ANY index (including first/last)
 * - Autoplay (pauses on hover/touch), smooth scrolling
 * - Progress bars are fully clickable (no dead ends)
 * - Smaller slide cards (80% / 55% / 40%), no page-level scrollbar
 *
 * Usage:
 *   import GallerySection from '@/components/GallerySection'
 *   <GallerySection />
 */
export default function GallerySection({
  title = 'Take a Look Inside',
  description = 'Bright, accessible spaces designed for comfort and community. We’re adding new photos as we complete finishing touches—come see it in person!',
  hideHeading = false,
  className = '',
  slides = [
    { alt: 'Center exterior', src: '/assets/Image-placeholder.png' },
    { alt: 'Open activity room', src: '/assets/Image-placeholder.png' },
    { alt: 'Dining and café area', src: '/assets/Image-placeholder.png' },
    { alt: 'Quiet lounge nook', src: '/assets/Image-placeholder.png' },
    { alt: 'Arts & crafts table', src: '/assets/Image-placeholder.png' },
    { alt: 'Wellness corner', src: '/assets/Image-placeholder.png' },
  ],
  autoplayMs = 4000,
}) {
  const [active, setActive] = useState(0)
  const trackRef = useRef(null)
  const pauseRef = useRef(false)
  const timerRef = useRef(null)

  /** Center a given slide index precisely (handles first/last correctly) */
  const centerSlide = (index, smooth = true) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(index, slides.length - 1))
    const slide = track.children[clamped]
    if (!slide) return
    const left = slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2
    track.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' })
  }

  /** Public goto helper used by buttons/bars */
  const goTo = (index, smooth = true) => {
    const clamped = Math.max(0, Math.min(index, slides.length - 1))
    centerSlide(clamped, smooth)
  }

  /** Update active index based on nearest card to viewport center */
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2
        const kids = Array.from(track.children)
        let nearest = 0
        let bestDist = Infinity
        kids.forEach((el, i) => {
          const mid = el.offsetLeft + el.clientWidth / 2
          const dist = Math.abs(mid - center)
          if (dist < bestDist) {
            bestDist = dist
            nearest = i
          }
        })
        setActive(nearest)
        ticking = false
      })
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [slides.length])

  /** Keep the active slide centered on resize */
  useEffect(() => {
    const onResize = () => centerSlide(active, false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [active])

  /** Autoplay: advance one slide; wrap to 0 after last */
  useEffect(() => {
    const tick = () => {
      if (pauseRef.current) return
      const next = active + 1 <= slides.length - 1 ? active + 1 : 0
      centerSlide(next)
    }
    clearInterval(timerRef.current)
    timerRef.current = setInterval(tick, autoplayMs)
    return () => clearInterval(timerRef.current)
  }, [active, slides.length, autoplayMs])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      goTo(active + 1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goTo(active - 1)
    }
  }

  return (
    <section className={`mt-20 ${className}`.trim()} aria-label="Gallery">
      {!hideHeading ? (
        <>
          <h2 className="mb-6 text-center text-3xl font-semibold text-gray-900">{title}</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-gray-700">{description}</p>
        </>
      ) : null}

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => (pauseRef.current = true)}
        onMouseLeave={() => (pauseRef.current = false)}
        onTouchStart={() => (pauseRef.current = true)}
        onTouchEnd={() => (pauseRef.current = false)}
        onKeyDown={onKeyDown}
        tabIndex={0} // keyboard focus for arrow nav
      >
        {/* Track */}
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth rounded-[22px] bg-white/60 p-3 ring-1 ring-gray-100 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-roledescription="carousel"
        >
          {slides.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] w-4/5 min-w-[80%] snap-center overflow-hidden rounded-[18px] shadow sm:w-[55%] sm:min-w-[55%] lg:w-2/5 lg:min-w-[40%]"
              aria-roledescription="slide"
              aria-label={`${idx + 1} of ${slides.length}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 55vw, 40vw"
                priority={idx === 0}
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/40" />
            </div>
          ))}
        </div>

        {/* Edge gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 rounded-l-[22px] bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 rounded-r-[22px] bg-gradient-to-l from-white to-transparent" />

        {/* Controls + Modern progress bars */}
        <div className="mt-4 flex select-none items-center gap-2">
          {/* Prev */}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo(active - 1)}
            className="inline-flex rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:border-gray-300"
          >
            ‹ Prev
          </button>

          {/* Bars (all clickable, including first/last) */}
          <div className="flex flex-1 items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className="relative h-1 flex-1 cursor-pointer overflow-hidden rounded-full bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span
                  className={`absolute left-0 top-0 h-full bg-emerald-500 transition-all duration-500 ${
                    i === active ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Next */}
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo(active + 1)}
            className="inline-flex rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:border-gray-300"
          >
            Next ›
          </button>
        </div>
      </div>
    </section>
  )
}
