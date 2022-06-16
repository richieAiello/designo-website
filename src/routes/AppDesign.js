import Hero from "../components/hero/Hero";
import ProjectsCard from "../components/main/projects-section/ProjectsCard";
import DesignCard from "../components/main/design-section/DesignCard";
import YourProject from "../components/main/your-project-section/YourProject";
import Footer from "../components/footer/Footer"

export default function AppDesign() {
  return (
    <>
      <main className="main main--secondary main--design container--main">
        <Hero
          modifier="design"
          heading={
            `App Design`
          }
          text={
            `Our mobile designs bring intuitive digital solutions 
            to your customers right at their fingertips.`
          }
        />
        <section className="projects container">
          <ProjectsCard 
            card="air"
            text={
              `Solving the problem of poor indoor air quality by filtering the air`
            }
          />
          <ProjectsCard 
            card="eye"
            text={
              `Product that lets you edit your favorite photos and videos at any time`
            }
          />
          <ProjectsCard 
            card="faceit"
            text={
              `Get to meet your favorite internet superstar with the faceit app`
            }
          />
          <ProjectsCard 
            card="todo"
            text={
              `A todo app that features cloud sync with light and dark mode`
            }
          />
          <ProjectsCard 
            card="loop"
            text={
              `A VR experience app made for Loopstudios`
            }
          />
        </section>
        <section className="design container">
          <DesignCard web={true} />
          <DesignCard graphic={true} />
        </section>
        <YourProject />
      </main>
      <Footer footerClass="footer" />
    </>
  );
}