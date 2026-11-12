import Section from '@/components/ui/Section'
import cx from '@/lib/cx'

/** A section whose content sits on a rounded mint panel. */
export default function Panel({ className, children, ...props }) {
  return (
    <Section spacing="panel" {...props}>
      <div
        className={cx(
          'rounded-panel-mobile-small bg-mint px-5 py-9 md:rounded-panel md:px-12 md:py-14',
          className
        )}
      >
        {children}
      </div>
    </Section>
  )
}
