import Hero from "../components/hero/Hero";
import ProjectsCard from "../components/main/projects-section/ProjectsCard";
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
      <main className="main">
        <section className="projects container">
          <ProjectsCard 
            card="express" 
            text={
              `A multi-carrier shipping website for ecommerce businesses`
            }
          />
        </section>
      </main>
      <Footer footerClass="footer" />
    </>
  );
}