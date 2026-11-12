import ServicePage from '@/components/services/ServicePage'
import nutritiousMeals from '@/content/services/nutritious-meals'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(nutritiousMeals.meta)

export default function NutritiousMealsPage() {
  return <ServicePage page={nutritiousMeals} />
}
