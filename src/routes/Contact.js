import Hero from "../components/hero/Hero";
import Location from "../components/main/location-section/Location";
import Footer from "../components/footer/Footer"

export default function Contact() {
  return (
    <>
      <main className="main">
        <Location />
      </main>
      <Footer footerClass="footer--secondary" />
    </>
  );
}