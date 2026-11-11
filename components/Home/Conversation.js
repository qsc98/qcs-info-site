'use client'

import { useId, useState } from 'react'
import PeopleCircles from './PeopleCircles'
import { lightFocus } from './SectionHeading'
import siteConfig from '../../site.config'

const questions = [
  'Does the person spend most of the day alone?',
  'Has memory, balance or mobility been changing?',
  'Is there a hospital or rehab discharge coming up?',
  'Does the caregiver need the daytime back?',
]

const countWords = ['', 'One', 'Two', 'Three', 'Four']

export function replyTitle(yeses) {
  if (yeses === 0) return 'No yeses yet, and that is fine. The conversation is still free.'
  if (yeses === 1) return 'One yes is enough. That is worth a conversation.'
  return `${countWords[yeses]} yeses. That is worth a conversation.`
}

const bubble = 'rounded-[18px_18px_18px_4px]'

/**
 * §3.5 "a two-minute check". Answers are local state only: nothing is sent
 * or stored. Each answer pill is a toggle button (aria-pressed); pressing
 * the chosen one again clears it.
 */
export default function Conversation() {
  const [answers, setAnswers] = useState(() => questions.map(() => null))
  const uid = useId()
  const yeses = answers.filter((a) => a === 'yes').length

  const choose = (index, value) =>
    setAnswers((prev) => prev.map((a, i) => (i === index ? (a === value ? null : value) : a)))

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3 rounded-[28px] bg-grey p-4 md:p-6">
      <p className="m-0 flex items-center gap-2.5 pb-1.5 leading-[normal]">
        <PeopleCircles />
        <span className="text-[14px] font-bold text-navy">{siteConfig.name}</span>
        <span className="text-[13px] text-text-faint">· a two-minute check</span>
      </p>

      {questions.map((q, i) => {
        const qid = `${uid}-q${i}`
        return (
          <div key={q} className="flex flex-col gap-3">
            <div className="flex justify-start">
              <p
                id={qid}
                className={`m-0 max-w-[calc(88%+30px)] border border-line bg-white px-3.5 py-3 text-[15px] leading-[1.45] font-medium text-navy md:max-w-[calc(70%+38px)] md:px-[18px] md:py-3.5 md:text-[16px] ${bubble}`}
              >
                {q}
              </p>
            </div>
            <div role="group" aria-labelledby={qid} className="flex justify-end gap-2">
              {[
                ['yes', 'Yes'],
                ['no', 'Not yet'],
              ].map(([value, label]) => {
                const pressed = answers[i] === value
                return (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={pressed}
                    onClick={() => choose(i, value)}
                    className={`min-h-11 rounded-pill border px-4 py-2.5 text-[15px] font-bold transition-colors ${lightFocus} ${
                      pressed
                        ? 'border-teal bg-teal text-white'
                        : 'border-line bg-white text-navy hover:border-teal'
                    }`}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}

      <div className="flex justify-start">
        <div
          className={`flex max-w-[calc(92%+32px)] flex-col gap-2.5 bg-navy p-4 text-white md:max-w-[calc(78%+44px)] md:px-[22px] md:py-[18px] ${bubble}`}
        >
          <p aria-live="polite" className="m-0 font-display text-[18px] leading-[normal] font-semibold text-white md:text-[20px]">
            {replyTitle(yeses)}
          </p>
          <p className="m-0 text-[15px] leading-normal text-on-navy-muted">
            Join the waitlist and we will call when enrollment opens. No health details needed yet.
          </p>
          <a
            href="#waitlist"
            className="self-start rounded-pill bg-white px-[22px] py-3.5 text-[16px] font-bold whitespace-nowrap text-navy hover:bg-mint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </div>
  )
}
