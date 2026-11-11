import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import Stats from '../components/Home/Stats'
import StickyBar from '../components/Home/StickyBar'
import Waitlist from '../components/Home/Waitlist'
import Who from '../components/Home/Who'
import WhyAndCenter from '../components/Home/WhyAndCenter'

// One wrapper so the layout's <main> gap does not space the home sections;
// each section carries its own padding from the design.
export default function Home() {
  return (
    <div className="flex flex-col leading-[normal]">
      <Hero />
      <Services />
      <Stats />
      <Who />
      <WhyAndCenter />
      <Waitlist />
      <StickyBar />
    </div>
  )
}
