'use client'

import Link from 'next/link'
import { useId, useState } from 'react'
import PeopleCircles from '@/components/home/PeopleCircles'
import { ButtonLink } from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import services from '@/content/services'
import cx from '@/lib/cx'
import siteConfig from '@/site.config'

// Each question names the services that answer it, so a "Yes" can point
// somewhere useful. Keys are from content/services.
const QUESTIONS = [
  { text: 'Does the person spend most of the day alone?', helps: ['adhc', 'meals'] },
  { text: 'Has memory, balance or mobility been changing?', helps: ['adhc', 'home'] },
  { text: 'Is there a hospital or rehab discharge coming up?', helps: ['home', 'transport'] },
  { text: 'Does the caregiver need the daytime back?', helps: ['adhc', 'home'] },
]

const ANSWERS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'Not yet' },
]

const COUNT_WORDS = ['No', 'One', 'Two', 'Three', 'Four']

/**
 * What the reply says (design/README.md §7): nothing presumptuous before the
 * first answer, honest when every answer is "Not yet", and only promises
 * what the waitlist does (one email).
 */
function replyFor(answers) {
  const answered = answers.filter(Boolean).length
  const yeses = answers.filter((a) => a === 'yes').length
  if (answered === 0) {
    return {
      title: 'Tap Yes or Not yet on each question.',
      body: 'Nothing you tap is sent or saved. It only helps you see where things stand.',
    }
  }
  if (yeses === 0 && answered < QUESTIONS.length) {
    return {
      title: 'No yeses so far.',
      body: 'Keep going: one yes is enough to make a conversation worthwhile.',
    }
  }
  if (yeses === 0) {
    return {
      title: 'Four not-yets. Good to hear.',
      body: 'Needs can change quickly. Join the waitlist and you will have one email with how to reach us when we open.',
    }
  }
  return {
    title:
      yeses === 1
        ? 'One yes is enough. That is worth a conversation.'
        : `${COUNT_WORDS[yeses]} yeses. That is worth a conversation.`,
    body: 'Join the waitlist and we will email you when enrollment opens. No health details needed.',
  }
}

/** Services the "Yes" answers point to, in the site's service order. */
function suggestionsFor(answers) {
  const keys = new Set(
    QUESTIONS.flatMap((question, i) => (answers[i] === 'yes' ? question.helps : []))
  )
  return services.filter((service) => keys.has(service.key))
}

const bubble = 'rounded-[18px_18px_18px_4px]'

/**
 * "A two-minute check". Answers are local state only: nothing is sent or
 * stored. Each answer is a toggle button; pressing the chosen one clears it.
 */
export default function Conversation() {
  const [answers, setAnswers] = useState(() => QUESTIONS.map(() => null))
  const uid = useId()

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
          <div key={question.text} className="flex flex-col gap-3">
            <p
              id={questionId}
              className={cx(
                bubble,
                'max-w-[calc(88%+30px)] self-start border border-line bg-white px-3.5 py-3 text-[15px] leading-[1.45] font-medium text-navy md:max-w-[calc(70%+38px)] md:px-[18px] md:py-3.5 md:text-[16px]'
              )}
            >
              {question.text}
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

      <Reply answers={answers} />
    </div>
  )
}

/** The team's answer: progress, a message for the current state, and where to go next. */
function Reply({ answers }) {
  const answered = answers.filter(Boolean).length
  const { title, body } = replyFor(answers)
  const suggestions = suggestionsFor(answers)

  return (
    <div
      className={cx(
        bubble,
        'flex flex-col gap-3 self-stretch bg-navy p-4 text-white md:px-[22px] md:py-5'
      )}
    >
      <p className="flex items-center gap-2 text-[13px] font-semibold text-on-navy-muted">
        <span aria-hidden="true" className="flex gap-1">
          {answers.map((answer, i) => (
            <span
              key={i}
              className={cx(
                'size-2 rounded-full',
                answer ? 'bg-mint-strong' : 'ring-1 ring-on-navy-faint ring-inset'
              )}
            />
          ))}
        </span>
        {answered} of {QUESTIONS.length} answered
      </p>

      <div aria-live="polite" className="flex flex-col gap-1.5">
        <p className="type-title-sm">{title}</p>
        <p className="text-[15px] leading-normal text-on-navy-muted">{body}</p>
      </div>

      {suggestions.length ? (
        <div className="flex flex-col gap-2">
          <p className="type-eyebrow text-mint-strong">What could help</p>
          <ul className="flex flex-wrap gap-2">
            {suggestions.map((service) => (
              <li key={service.key}>
                <Link
                  href={service.href}
                  className="flex min-h-11 items-center gap-2 rounded-pill border border-white/30 bg-white/10 px-3.5 text-[14px] font-semibold text-white focus-ring-inverse hover:bg-white/20"
                >
                  <Icon name={service.icon} size={16} className="text-mint-strong" />
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <ButtonLink href="#waitlist" variant="inverse" className="mt-1 self-start whitespace-nowrap">
        Join the waitlist
      </ButtonLink>
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
