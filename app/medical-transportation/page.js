import ServicePage from '@/components/services/ServicePage'
import medicalTransportation from '@/content/services/medical-transportation'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(medicalTransportation.meta)

export default function MedicalTransportationPage() {
  return <ServicePage page={medicalTransportation} />
}
