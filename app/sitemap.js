import { routes } from '@/lib/seo'
import siteConfig from '@/site.config'

export const dynamic = 'force-static'

export default function sitemap() {
  const lastModified = new Date()
  return routes.map((path) => ({
    url: `${siteConfig.url}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority:
      path === '/' ? 1 : path.startsWith('/privacy') || path.startsWith('/terms') ? 0.2 : 0.7,
  }))
}
