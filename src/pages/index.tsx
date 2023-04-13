import { type NextPage } from "next";
import Head from "next/head";
import Footer from "@/molecules/Footer";
import Header from "@/molecules/Header";
import AboutUs from "@/sections/AboutUs";
import Contact from "@/sections/Contact";
import Hero from "~/components/sections/Hero";
import Pricing from "@/sections/Pricing";
import WhyUs from "@/sections/WhyUs";
import Workflow from "@/sections/Workflow";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sapiens - Web & Marketing</title>
        <meta name="description" content="Sapiens branding and web design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-white">
        <Header />
        <Hero />
        <AboutUs />
        <Workflow />
        <Pricing />
        <WhyUs />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
