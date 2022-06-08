import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";

export default function WebDesign() {
  return (
    <>
      <Hero 
        heroClass="hero--design"
        wrapperClass="hero__wrapper--design"
        heading={
          `Web Design`
        }
        text={
          `We build websites that serve as powerful marketing tools 
          and bring memorable brand experiences.`
        }
      />
      <Footer footerClass="footer" />
    </>
  );
}