import Hero from "../components/hero/Hero";
import HeroWrapper from "../components/hero/HeroWrapper";
import ProjectsCard from "../components/main/projects-section/ProjectsCard";
import DesignCard from "../components/main/design-section/DesignCard";
import YourProject from "../components/main/your-project-section/YourProject";
import Footer from "../components/footer/Footer"

export default function GraphicDesign() {
  return (
    <>
      <main className="main main--design">
        <Hero mod="design">
          <HeroWrapper
            mod="design"
            heading={
              `Graphic Design`
            }
            text={
              `We deliver eye-catching branding materials that are
              tailored to meet your business objectives.`
            }
          />
        </Hero>
        <section className="projects container">
          <ProjectsCard
            card="tim"
            text={
              `A book cover designed for Tim Brown’s new release, ‘Change’`
            }
          />
          <ProjectsCard
            card="boxed"
            text={
              `A simple packaging concept made for Boxed Water`
            }
          />
          <ProjectsCard
            card="science"
            text={
              `A poster made in collaboration with the Federal Art Project`
            }
          />
        </section>
        <section className="design container">
          <DesignCard app={true} />
          <DesignCard web={true} />
        </section>
        <YourProject />
      </main>
      <Footer footerClass="footer" />
    </>
  );
}