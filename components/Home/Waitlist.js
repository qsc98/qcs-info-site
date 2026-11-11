import { Reveal } from './motion'
import WaitlistForm from '../WaitlistForm'

/** §3.7 Be first to know. The Netlify `waitlist` form, email only. */
export default function Waitlist() {
  return (
    <section
      id="waitlist"
      aria-labelledby="waitlist-title"
      className="mx-auto w-full max-w-[1280px] px-2.5 pt-2.5 md:px-4 md:pt-6 md:pb-4"
    >
      <Reveal className="flex flex-col gap-3 rounded-panel-mobile-small bg-teal px-[22px] py-7 text-white md:flex-row md:flex-wrap md:items-center md:gap-8 md:rounded-panel md:px-12 md:py-14">
        <div className="flex min-w-0 flex-col gap-3 md:flex-[1_1_420px] md:gap-2.5">
          <h2
            id="waitlist-title"
            className="m-0 bg-none font-display text-[32px] leading-none font-bold tracking-[-0.02em] text-white uppercase md:text-[44px]"
          >
            Be first to know
          </h2>
          <p className="m-0 text-[16px] leading-[normal] text-on-teal-muted md:text-[18px]">
            One email with the opening date, hours and how to enroll. No health information,
            please.
          </p>
        </div>
        <div className="min-w-0 md:flex-[1_1_396px]">
          <WaitlistForm variant="panel" />
        </div>
      </Reveal>
    </section>
  )
}
