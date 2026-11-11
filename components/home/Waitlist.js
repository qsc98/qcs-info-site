import WaitlistForm from '@/components/forms/WaitlistForm'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'

/** §3.7 Be first to know. */
export default function Waitlist() {
  return (
    <Section
      id="waitlist"
      spacing="none"
      aria-labelledby="waitlist-title"
      className="px-2.5 pt-2.5 md:px-4 md:pt-6 md:pb-4"
    >
      <Reveal className="flex flex-col gap-3 rounded-panel-mobile-small bg-teal px-[22px] py-7 text-white md:flex-row md:flex-wrap md:items-center md:gap-8 md:rounded-panel md:px-12 md:py-14">
        <div className="flex min-w-0 flex-col gap-3 md:flex-[1_1_420px] md:gap-2.5">
          <h2 id="waitlist-title" className="type-panel-title">
            Be first to know
          </h2>
          <p className="text-[16px] text-on-teal-muted md:text-[18px]">
            One email with the opening date, hours and how to enroll. No health information, please.
          </p>
        </div>
        {/* 396px = the reference's 380px form basis plus its padding. */}
        <div className="min-w-0 md:flex-[1_1_396px]">
          <WaitlistForm layout="panel" />
        </div>
      </Reveal>
    </Section>
  )
}
