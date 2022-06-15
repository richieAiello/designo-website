import Hero from "../components/hero/Hero";
import HeroForm from "../components/hero/HeroForm";
import Location from "../components/main/location-section/Location";
import Footer from "../components/footer/Footer"

export default function Contact() {
  return (
    <>
      <main className="main">
        <Hero 
          modifier="contact"
          heading={
            `Contact us`
          }
          text={
            `Ready to take it to the next level? Let’s talk about your project or idea and find out how 
            we can help your business grow. If you are looking for unique digital experiences that’s 
            relatable to your users, drop us a line.`
          }
          form={<HeroForm />}
        />
        <Location />
      </main>
      <Footer footerClass="footer--secondary" />
    </>
  );
}