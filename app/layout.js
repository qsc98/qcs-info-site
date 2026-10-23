import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import JsonLd from '../components/JsonLd'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import { defaultTitle } from '../lib/seo'
import siteConfig from '../site.config'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter-sans', display: 'swap' })
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: defaultTitle, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_US',
    title: defaultTitle,
    description: siteConfig.description,
    url: '/',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: '#1a4566',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy focus:shadow-lg"
        >
          Skip to content
        </a>
        <Header />
        <main
          id="main"
          className="flex flex-col gap-y-16 pb-32 sm:gap-y-20 lg:gap-y-28 lg:pb-0"
        >
          {children}
        </main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  )
}
