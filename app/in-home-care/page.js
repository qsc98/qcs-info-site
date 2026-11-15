import ServicePage from '@/components/services/ServicePage'
import inHomeCare from '@/content/services/in-home-care'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(inHomeCare.meta)

export default function InHomeCarePage() {
  return <ServicePage page={inHomeCare} />
}
