import ServiceOfferings from "../components/ServiceOfferings";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import AdultDayCareService from "../components/AdultDayCareService";
import NutritiousMeals from "../components/NutritiousMeals";
import InHomeCare from "../components/InHomeCareService.js";
import MedicalTransportation from "../components/MedicalTransportation";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <>
      <SeoHead title='Quality Senior Care' />
      <Layout>
        <Hero />
        <ServiceOfferings />
        <AdultDayCareService />
        <NutritiousMeals />
        <InHomeCare />
        <MedicalTransportation />
        <AboutUs />
     </Layout>
    </>
  );
}
