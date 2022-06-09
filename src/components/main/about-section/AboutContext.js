import AboutImage from "./AboutImage";

export default function AboutContext() {
  return (
    <section className="about container--secondary">
      <AboutImage />
      <div className="about__context">
        <h2 className="about__heading bold">
          World-class talent
        </h2>
        <p className="about__text">
          We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully 
          crafted from concept to launch, ensuring success in its given market. We are constantly updating 
          our skills in a myriad of platforms.
        </p>
        <p className="about__text">
          Our team is multi-disciplinary and we are not merely interested in form — content and meaning
          are just as important. We give great importance to craftsmanship, service, and prompt delivery.
          Clients have always been impressed with our high-quality outcomes that encapsulates their
          brand’s story and mission.
        </p>
      </div>
    </section>
  );
}