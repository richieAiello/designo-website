import AboutImageSecondary from "./AboutImageSecondary";

export default function AboutContextSecondary() {
  return (
    <section className="about container--secondary">
      <AboutImageSecondary />
      <div className="about__context">
        <h2 className="about__heading">
          The real deal
        </h2>
        <p className="about__text">
          As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
          Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give you tools to measure success.
        </p>
        <p className="about__text">
          We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, 
          we inspire audiences to take action and drive real results.
        </p>
      </div>
    </section>
  );
}