import Map from "../components/main/map-section/Map";
import canada from "../assets/locations/tablet/image-map-canada.png";
import canadaDesktop from "../assets/locations/desktop/image-map-canada.png";
import australia from "../assets/locations/tablet/image-map-australia.png";
import australiaDesktop from "../assets/locations/desktop/image-map-australia.png";
import uk from "../assets/locations/tablet/image-map-uk.png";
import ukDesktop from "../assets/locations/desktop/image-map-united-kingdom.png"
import Footer from "../components/footer/Footer";

export default function Locations() {
  return (
    <>
      <main className="main--locations">
        <Map 
          modifier={canada}
          desktop={canadaDesktop}
          heading="Hi"
          office="1"
          contact="2"
        />
      </main>
      <Footer footerClass="footer" />
    </>
  );
}