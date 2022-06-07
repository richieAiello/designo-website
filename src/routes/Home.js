import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import HeroBtn from "../components/hero/HeroBtn";
import HeroImage from "../components/hero/HeroImage";
import DesignCard from "../components/main/design-section/DesignCard";
import Quality from "../components/main/qualities-section/Quality";
import YourProject from "../components/main/your-project-section/YourProject";

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
        <section className="qualities container">
          <Quality
            text={
              `Each project starts with an in-depth brand research to ensure 
              we only create products that serve a purpose. We merge
              art, design, and technology into exciting new solutions.`
            }
            passionate={true}
          />
          <Quality
            text={
              `Everything that we do has a strategic purpose. We use an agile 
              approach in all of our projects and value customer collaboration. 
              It guarantees superior results that fulfill our clients’ needs.`
            }
            resourceful={true}
          />
          <Quality
            text={
              `We are a group of enthusiastic folks who know how to put people 
              first. Our success depends on our customers, and we
              strive to give them the best experience a company can provide.`
            }
            friendly={true}
          />
        </section>
        <YourProject />
      </main>
      <Footer footerClass="footer" />
    </>
  );
}