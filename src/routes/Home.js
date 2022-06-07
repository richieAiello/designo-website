import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import HeroBtn from "../components/hero/HeroBtn";
import HeroImage from "../components/hero/HeroImage";
import DesignCard from "../components/main/design-section/DesignCard";

export default function Home() {
  return (
    <>
      <Hero 
        heroClass="hero--home"
        wrapperClass="hero__wrapper--home"
        heading={
          `Award-winning custom designs and digital branding solutions`
        }
        text={
          `With over 10 years in the industry, we are experienced in
          creating fully responsive websites, app design, 
          and engaging brand experiences. Find out more about our services.`
        }
        btn={<HeroBtn />}
        image={<HeroImage />}
      />
      <main className="main">
      <section className="design container">
        <DesignCard web={true} />
        <DesignCard app={true} />
        <DesignCard graphic={true} />
      </section>
      </main>
      <Footer footerClass="footer" />
    </>
  );
}