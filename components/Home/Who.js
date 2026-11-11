import Image from 'next/image'
import Conversation from './Conversation'
import { Reveal } from './motion'
import { bodyText, Eyebrow, SectionTitle } from './SectionHeading'

/** §3.5 You do not need a diagnosis to ask. */
export default function Who() {
  return (
    <section
      id="who"
      className="mx-auto flex w-full max-w-[1280px] flex-wrap items-stretch gap-5 px-5 py-9 md:gap-14 md:px-10 md:py-[72px]"
    >
      <Reveal className="flex min-w-0 flex-[1_1_420px] flex-col md:flex-[1_1_452px] gap-3.5 overflow-hidden rounded-[28px] bg-mint px-5 pt-6 md:px-9 md:pt-9">
        <Eyebrow>Who this is for</Eyebrow>
        <SectionTitle accent="to ask.">You do not need a diagnosis </SectionTitle>
        <p className={bodyText}>
          Adult day health care is for adults who need some help, supervision or company during the
          day, and for the people who look after them. Answer four quick questions; it works the
          same whether you are a spouse, a daughter, a neighbor or a case manager.
        </p>
        <p className="m-0 text-[14px] leading-[normal] font-semibold text-text-muted">
          Medicaid waivers enrolling · private pay, LTC insurance and veterans benefits accepted
        </p>
        {/* The illustration "peeks in": its bottom edge is cut by the panel. */}
        <div className="-mx-5 mt-auto pt-2.5 md:-mx-9">
          <div className="relative aspect-[16/8] overflow-hidden rounded-t-card shadow-peek md:aspect-video">
            <Image
              src="/illustrations/home.svg"
              alt="A living room at home with an armchair, a walker and a cup of tea"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover object-[center_40%]"
            />
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.15} className="flex min-w-0 flex-[1_1_552px] md:flex-[1_1_568px]">
        <Conversation />
      </Reveal>
    </section>
  )
}
