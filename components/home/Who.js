import Image from 'next/image'
import Conversation from '@/components/home/Conversation'
import Eyebrow from '@/components/ui/Eyebrow'
import Float from '@/components/ui/Float'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import SectionTitle, { Accent } from '@/components/ui/SectionTitle'
import cx from '@/lib/cx'

// Who can ask, as chips floating around the photo. Position, tilt and float
// delay per chip; the last one is the navy accent.
const askers = [
  { label: 'A spouse', position: 'top-[3%] left-0', tilt: -3, delay: 0 },
  { label: 'A daughter', position: 'top-0 right-0', tilt: 2, delay: 0.8 },
  { label: 'A neighbor', position: 'bottom-[5%] left-0', tilt: 2, delay: 1.6 },
  { label: 'A case manager', position: 'right-0 bottom-0', tilt: -2, delay: 2.4, accent: true },
]

/**
 * §3.5 You do not need a diagnosis to ask. The photo sits in a circle (it is
 * shot through a magnifying glass) with the four askers as chips around it;
 * the questions are a checklist card beside it, under a centred heading.
 */
export default function Who() {
  return (
    <Section id="who" className="flex flex-col gap-8 lg:gap-12">
      <Reveal className="mx-auto flex max-w-[800px] flex-col items-center gap-3 text-center">
        <Eyebrow>Who this is for</Eyebrow>
        <SectionTitle>
          You do not need a diagnosis{' '}
          <Accent>
            <span className="whitespace-nowrap">to ask.</span>
          </Accent>
        </SectionTitle>
        <p className="type-body text-text-muted">
          Adult day health care is for adults who need some help, supervision or company during the
          day, and for the people who look after them. Answer four quick questions; it works the
          same whether you are a spouse, a daughter, a neighbor or a case manager.
        </p>
      </Reveal>

      <div className="grid items-center gap-x-14 gap-y-7 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)]">
        <Reveal
          variant="pop"
          className="relative mx-auto aspect-square w-full max-w-[340px] lg:max-w-[460px]"
        >
          <span aria-hidden="true" className="absolute inset-0 rounded-full bg-mint" />
          <span className="absolute inset-[6%] overflow-hidden rounded-full border-[6px] border-white shadow-float-light md:border-[10px]">
            <Image
              src="/photos/who-magnifying-glass.jpg"
              alt="Three older adults laughing together over an old photograph, seen through a magnifying glass"
              fill
              sizes="(min-width: 1024px) 405px, 300px"
              className="object-cover object-[53%_50%]"
            />
          </span>
          <ul aria-label="Who can ask">
            {askers.map(({ label, position, tilt, delay, accent }) => (
              <Float
                as="li"
                key={label}
                tilt={tilt}
                delay={delay}
                className={cx(
                  'absolute rounded-pill px-3 py-2 text-[13px] font-bold shadow-avatar md:px-4 md:py-2.5 md:text-[15px]',
                  position,
                  accent ? 'bg-navy text-white' : 'bg-white text-navy'
                )}
              >
                {label}
              </Float>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="flex min-w-0 flex-col gap-4">
          <Conversation />
          <p className="text-[14px] font-semibold text-text-muted">
            Medicaid waivers enrolling · private pay, LTC insurance and veterans benefits accepted
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
