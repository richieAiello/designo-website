import Hero from "../components/hero/Hero";
import ProjectsCard from "../components/main/projects-section/ProjectsCard";
import DesignCard from "../components/main/design-section/DesignCard";
import YourProject from "../components/main/your-project-section/YourProject";
import Footer from "../components/footer/Footer";

export default function WebDesign() {
  return (
    <>
      <Hero 
        modifier="design"
        heading={
          `Web Design`
        }
        text={
          `We build websites that serve as powerful marketing tools 
          and bring memorable brand experiences.`
        }
      />
      <main className="main main--design">
        <section className="projects container">
          <ProjectsCard 
            card="express" 
            text={
              `A multi-carrier shipping website for ecommerce businesses`
            }
          />
          <ProjectsCard 
            card="transfer" 
            text={
              `Site for low-cost money transfers and sending money within seconds`
            }
          />
          <ProjectsCard 
            card="photon" 
            text={
              `A state-of-the-art music player with high-resolution audio and DSP effects`
            }
          />
          <ProjectsCard 
            card="builder" 
            text={
              `Connects users with local contractors based on their location`
            }
          />
          <ProjectsCard 
            card="blogr" 
            text={
              `Blogr is a platform for creating an online blog or publication`
            }
          />
          <ProjectsCard 
            card="camp" 
            text={
              `Get expert training in coding, data, design, and digital marketing`
            }
          />
        </section>
        <section className="design container">
          <DesignCard app={true} />
          <DesignCard graphic={true} />
        </section>
        <YourProject />
      </main>
      <Footer footerClass="footer" />
    </>
  );
}