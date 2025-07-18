import ServiceOfferings from "../components/ServiceOfferings";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import AdultDayCareService from "../components/AdultDayCareService";
import NutritiousMeals from "../components/NutritiousMeals";
import InHomeCare from "../components/InHomeCareService.js";
import MedicalTransportation from "../components/MedicalTransportation";

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
        <Pricing />
     </Layout>
    </>
  );
}
