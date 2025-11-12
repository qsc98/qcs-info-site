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
        <section
          id="services"
          className="relative section-shell mx-auto max-w-screen-xl overflow-hidden rounded-3xl px-4 py-12 sm:px-6 lg:px-10 lg:py-16"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('/assets/background-2.jpg')",
              backgroundSize: '480px auto',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'top left',
            }}
            aria-hidden="true"
          />
          <div className="relative space-y-12">
            <ServiceOfferings />
            <AdultDayCareService />
            <NutritiousMeals />
            <InHomeCare />
            <MedicalTransportation />
          </div>
        </section>
        <PaymentLocationsSection />
        <AboutUs />
        <ContactUs />
      </Layout>
    </>
  )
}
