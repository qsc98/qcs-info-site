import Link from 'next/link'
import PrimaryCta from '@/components/legacy/PrimaryCta'

export const metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <div className="legacy mx-auto max-w-2xl px-6 pt-40 pb-24 text-center">
      <p className="text-sm font-semibold tracking-wide text-teal uppercase">404</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">We can’t find that page</h1>
      <p className="mt-6 text-lg text-slate-600">
        The link may be out of date. Try one of these instead.
      </p>
      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <PrimaryCta href="/">Go to the home page</PrimaryCta>
        <PrimaryCta href="/contact">Contact us</PrimaryCta>
      </div>
      <p className="mt-10 text-sm text-slate-500">
        Looking for a service?{' '}
        <Link href="/adult-day-care" className="underline">
          Adult Day Care
        </Link>
        ,{' '}
        <Link href="/medical-transportation" className="underline">
          Transportation
        </Link>
        ,{' '}
        <Link href="/nutritious-meals" className="underline">
          Meals
        </Link>{' '}
        or{' '}
        <Link href="/in-home-care" className="underline">
          In-Home Care
        </Link>
        .
      </p>
    </div>
  )
}
