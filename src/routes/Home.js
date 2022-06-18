import Hero from "../components/hero/Hero";
import HeroWrapper from "../components/hero/HeroWrapper";
import HeroBtn from "../components/hero/HeroBtn";
import HeroImage from "../components/hero/HeroImage";
import DesignCard from "../components/main/design-section/DesignCard";
import Quality from "../components/main/qualities-section/Quality";
import YourProject from "../components/main/your-project-section/YourProject";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <main className="main main--home">
        <Hero mod="home">
          <HeroWrapper
            mod="home"
            heading={
              `Award-winning custom designs and digital branding solutions`
            }
            text={
              `With over 10 years in the industry, we are experienced in
              creating fully responsive websites, app design,
              and engaging brand experiences. Find out more about our services.`
            }
          >
            <HeroBtn />
          </HeroWrapper>
          <HeroImage />
        </Hero>
        <section className="design design--home container">
          <DesignCard web={true} large={true} />
          <DesignCard app={true} />
          <DesignCard graphic={true} />
        </section>
        <section className="qualities container">
          <Quality
            text={
              `Each project starts with an in-depth brand research to ensure
              we only create products that serve a purpose. We merge
              art, design, and technology into exciting new solutions.`
            }
            passionate={true}
            mod="passionate"
          />
          <Quality
            text={
              `Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.`
            }
            resourceful={true}
            mod="resourceful"
          />
          <Quality
            text={
              `We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we
              strive to give them the best experience a company can provide.`
            }
            friendly={true}
            mod="friendly"
          />
        </section>
        <YourProject />
      </main>
      <Footer footerClass="footer" />
    </>
  );
}