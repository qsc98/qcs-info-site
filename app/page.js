import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Stats from '@/components/home/Stats'
import StickyBar from '@/components/home/StickyBar'
import Who from '@/components/home/Who'
import WhyAndCenter from '@/components/home/WhyAndCenter'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Who />
      <WhyAndCenter />
      <StickyBar />
    </>
  )
}
