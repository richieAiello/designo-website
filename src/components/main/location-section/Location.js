import { Link } from "react-router-dom";
import iconCanada from "../../../assets/shared/desktop/illustration-canada.svg";
import iconAustralia from "../../../assets/shared/desktop/illustration-australia.svg";
import iconUnitedKingdom from "../../../assets/shared/desktop/illustration-united-kingdom.svg";

export default function Location() {
  return (
    <section className="location container">
      <div className="location__wrapper">
        <img src={iconCanada} alt="" className="location__icon" />
        <h3 className="lcoation__heading bold">Canada</h3>
        <Link to="/locations" className="btn btn--location link">See Location</Link>
      </div>
      <div className="location__wrapper">
        <img src={iconAustralia} alt="" className="location__icon" />
        <h3 className="lcoation__heading bold">Australia</h3>
        <Link to="/locations" className="btn btn--location link">See Location</Link>
      </div>
      <div className="location__wrapper">
        <img src={iconUnitedKingdom} alt="" className="location__icon" />
        <h3 className="lcoation__heading bold">United Kingdom</h3>
        <Link to="/locations" className="btn btn--location link">See Location</Link>
      </div>
    </section>
  );
}