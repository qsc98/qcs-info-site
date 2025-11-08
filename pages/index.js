import ServiceOfferings from '../components/ServicesSection/ServiceOfferings.js'
import Hero from '../components/Hero'
import Layout from '../components/Layout/Layout'
import SeoHead from '../components/SeoHead'
import AdultDayCareService from '../components/ServicesSection/AdultDayCareService.js'
import NutritiousMeals from '../components/ServicesSection/NutritiousMeals.js'
import InHomeCare from '../components/ServicesSection/InHomeCareService.js'
import MedicalTransportation from '../components/ServicesSection/MedicalTransportation.js'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import BenefitStatsSection from '../components/BenifitAndStats.js'
import PaymentLocationsSection from '../components/PaymentLocations.js'

export default function Home() {
  return (
    <>
      <SeoHead title="Quality Senior Care" />
      <Layout>
        <Hero />
        <BenefitStatsSection />
        <section className="section-shell mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16 space-y-12">
          <ServiceOfferings />
          <AdultDayCareService />
          <NutritiousMeals />
          <InHomeCare />
          <MedicalTransportation />
        </section>
        <PaymentLocationsSection />
        <AboutUs />
        <ContactUs />
      </Layout>
    </>
  )
}
