/**
 * Eyebrow + H2 with one accent phrase in teal (§2.2). Eyebrows are spans,
 * never headings.
 */
export function Eyebrow({ children, className = '' }) {
  return (
    <span
      className={`text-[13px] font-bold tracking-[0.08em] text-teal uppercase md:text-[14px] ${className}`}
    >
      {children}
    </span>
  )
}

export function SectionTitle({ children, accent, className = '' }) {
  return (
    <h2
      className={`m-0 bg-none font-display text-[32px] leading-[1.1] font-semibold tracking-[-0.02em] text-navy md:text-[46px] ${className}`}
    >
      {children}
      {accent ? <span className="text-teal">{accent}</span> : null}
    </h2>
  )
}

export const bodyText = 'm-0 text-[16px] leading-[1.55] text-text-muted md:text-[17px]'

export const lightFocus =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal'

// No display utility here, so callers can add `hidden` without a conflict.
export const navyButton = `items-center justify-center rounded-pill bg-navy px-[22px] py-3.5 text-[16px] font-bold text-white hover:bg-teal ${lightFocus}`
