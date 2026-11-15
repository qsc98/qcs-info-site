import ServicePage from '@/components/services/ServicePage'
import adultDayCare from '@/content/services/adult-day-care'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(adultDayCare.meta)

export default function AdultDayCarePage() {
  return <ServicePage page={adultDayCare} />
}
