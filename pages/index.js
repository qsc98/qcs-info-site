import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import LandingPage from "../components/LandingPage";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='Quality Senior Care' />
      <LandingPage/>
      {/* <Layout> */}
        {/* <Hero />
        <Feature />
        <Pricing /> */}
      {/* </Layout> */}
    </>
  );
}
