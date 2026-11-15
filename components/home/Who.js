import Image from 'next/image'
import Conversation from '@/components/home/Conversation'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionTitle, { Accent } from '@/components/ui/SectionTitle'

/**
 * §3.5 You do not need a diagnosis to ask. Column bases are the reference's
 * content widths plus padding, so the columns split as approved.
 */
export default function Who() {
  return (
    <Section id="who" className="flex flex-wrap items-stretch gap-5 md:gap-14">
      <Reveal className="flex min-w-0 flex-[1_1_420px] flex-col gap-3.5 overflow-hidden rounded-block bg-mint px-5 pt-6 md:flex-[1_1_452px] md:px-9 md:pt-9">
        <Eyebrow>Who this is for</Eyebrow>
        <SectionTitle>
          You do not need a diagnosis <Accent>to ask.</Accent>
        </SectionTitle>
        <p className="type-body text-text-muted">
          Adult day health care is for adults who need some help, supervision or company during the
          day, and for the people who look after them. Answer four quick questions; it works the
          same whether you are a spouse, a daughter, a neighbor or a case manager.
        </p>
        <p className="text-[14px] font-semibold text-text-muted">
          Medicaid waivers enrolling · private pay, LTC insurance and veterans benefits accepted
        </p>
        {/* The illustration "peeks in": the panel edge cuts its bottom on purpose. */}
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
    </Section>
  )
}
