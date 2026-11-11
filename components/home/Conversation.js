'use client'

import { useId, useState } from 'react'
import PeopleCircles from '@/components/home/PeopleCircles'
import { ButtonLink } from '@/components/ui/Button'
import cx from '@/lib/cx'
import siteConfig from '@/site.config'

const QUESTIONS = [
  'Does the person spend most of the day alone?',
  'Has memory, balance or mobility been changing?',
  'Is there a hospital or rehab discharge coming up?',
  'Does the caregiver need the daytime back?',
]

const ANSWERS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'Not yet' },
]

const COUNT_WORDS = ['', 'One', 'Two', 'Three', 'Four']

/** Reply title for a number of yes answers (design/README.md §3.5). */
function replyTitle(yeses) {
  if (yeses === 0) return 'No yeses yet, and that is fine. The conversation is still free.'
  if (yeses === 1) return 'One yes is enough. That is worth a conversation.'
  return `${COUNT_WORDS[yeses]} yeses. That is worth a conversation.`
}

const bubble = 'rounded-[18px_18px_18px_4px]'

/**
 * "A two-minute check". Answers are local state only: nothing is sent or
 * stored. Each answer is a toggle button; pressing the chosen one clears it.
 */
export default function Conversation() {
  const [answers, setAnswers] = useState(() => QUESTIONS.map(() => null))
  const uid = useId()
  const yeses = answers.filter((answer) => answer === 'yes').length

  const choose = (index, value) =>
    setAnswers((prev) => prev.map((a, i) => (i === index ? (a === value ? null : value) : a)))

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3 rounded-block bg-grey p-4 md:p-6">
      <p className="flex items-center gap-2.5 pb-1.5">
        <PeopleCircles />
        <span className="text-[14px] font-bold text-navy">{siteConfig.name}</span>
        <span className="text-[13px] text-text-faint">· a two-minute check</span>
      </p>

      {QUESTIONS.map((question, i) => {
        const questionId = `${uid}-q${i}`
        return (
          <div key={question} className="flex flex-col gap-3">
            <p
              id={questionId}
              className={cx(
                bubble,
                'max-w-[calc(88%+30px)] self-start border border-line bg-white px-3.5 py-3 text-[15px] leading-[1.45] font-medium text-navy md:max-w-[calc(70%+38px)] md:px-[18px] md:py-3.5 md:text-[16px]'
              )}
            >
              {question}
            </p>
            <div role="group" aria-labelledby={questionId} className="flex justify-end gap-2">
              {ANSWERS.map(({ value, label }) => (
                <AnswerButton
                  key={value}
                  pressed={answers[i] === value}
                  onClick={() => choose(i, value)}
                >
                  {label}
                </AnswerButton>
              ))}
            </div>
          </div>
        )
      })}

      <div
        className={cx(
          bubble,
          'flex max-w-[calc(92%+32px)] flex-col gap-2.5 self-start bg-navy p-4 text-white md:max-w-[calc(78%+44px)] md:px-[22px] md:py-[18px]'
        )}
      >
        <p aria-live="polite" className="type-title-sm">
          {replyTitle(yeses)}
        </p>
        <p className="text-[15px] leading-normal text-on-navy-muted">
          Join the waitlist and we will call when enrollment opens. No health details needed yet.
        </p>
        <ButtonLink href="#waitlist" variant="inverse" className="self-start whitespace-nowrap">
          Join the waitlist
        </ButtonLink>
      </div>
    </div>
  )
}

function AnswerButton({ pressed, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cx(
        'min-h-11 rounded-pill border px-4 py-2.5 text-[15px] font-bold focus-ring transition-colors',
        pressed
          ? 'border-teal bg-teal text-white'
          : 'border-line bg-white text-navy hover:border-teal'
      )}
    >
      {children}
    </button>
  )
}
