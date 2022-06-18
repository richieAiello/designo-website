import Hero from "../components/hero/Hero";
import HeroWrapper from "../components/hero/HeroWrapper";
import HeroBanner from "../components/hero/HeroBanner";
import AboutContext from "../components/main/about-section/AboutContext";
import Location from "../components/main/location-section/Location";
import AboutContextSecondary from "../components/main/about-section/AboutContextSecondary";
import YourProject from "../components/main/your-project-section/YourProject";
import Footer from "../components/footer/Footer";

export default function About() {
  return (
    <>
      <main className="main main--about">
        <Hero mod="about">
          <HeroWrapper
            mod="about"
            heading={
              `About Us`
            }
            text={
              `Founded in 2010, we are a creative agency that produces lasting results for our clients. 
              We’ve partnered with many startups, corporations, and nonprofits alike to craft designs 
              that make real impact. We’re always looking forward to creating brands, products, and 
              digital experiences that connect with our clients' audiences.`
            }
          >
          </HeroWrapper>
          <HeroBanner />
        </Hero>
        <AboutContext />
        <Location />
        <AboutContextSecondary />
        <YourProject />
      </main>
      <Footer footerClass="footer"/>
    </>
  );
}