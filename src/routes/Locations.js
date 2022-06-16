import Map from "../components/main/map-section/Map";
import canada from "../assets/locations/tablet/image-map-canada.png";
import canadaDesktop from "../assets/locations/desktop/image-map-canada.png";
import australia from "../assets/locations/tablet/image-map-australia.png";
import australiaDesktop from "../assets/locations/desktop/image-map-australia.png";
import uk from "../assets/locations/tablet/image-map-uk.png";
import ukDesktop from "../assets/locations/desktop/image-map-united-kingdom.png"
import YourProject from "../components/main/your-project-section/YourProject";
import Footer from "../components/footer/Footer";

export default function Locations() {
  return (
    <>
      <main className="main main--locations container--main">
        <Map 
          modifier="canada"
          img={canada}
          imgDesktop={canadaDesktop}
          heading="Canada"
          office="Designo Central Office"
          street="3886 Wellington Street"
          address="Toronto, Ontario M9C 3J5"
          phone="P : +1 253-863-8967"
          email="M : contact@designo.co"
        />
        <Map 
          modifier="australia"
          img={australia}
          imgDesktop={australiaDesktop}
          heading="Australia"
          office="Designo AU Office"
          street="19 Balonne Street"
          address="New South Wales 2443"
          phone="P : (02) 6720 9092"
          email="M : contact@designo.au"
        />
        <Map 
          modifier="uk"
          img={uk}
          imgDesktop={ukDesktop}
          heading="United Kingdom"
          office="Designo UK Office"
          street="13 Colorado Way"
          address="Rhyd-y-fro SA8 9GA"
          phone="P : 078 3115 1400"
          email="M : contact@designo.uk"
        />
        <YourProject />
      </main>
      <Footer footerClass="footer" />
    </>
  );
}