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
        <ServiceOfferings />
        <AdultDayCareService />
        <NutritiousMeals />
        <InHomeCare />
        <MedicalTransportation />
        <PaymentLocationsSection />
        <AboutUs />
        <ContactUs />
      </Layout>
    </>
  )
}
