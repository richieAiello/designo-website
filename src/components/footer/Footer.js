import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo-light.png";
import FooterIcons from "./FooterIcons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <NavLink to="/" className="footer__logo" aria-label="Link to home page.">
          <img src={logo} alt="" className="footer__logo--icon"/>
        </NavLink>
        <div className="footer__bar"></div>
        <ul className="footer__list">
          <li className="footer__item">
            <NavLink to="/about" className="footer__link link">Our Company</NavLink>
          </li>
          <li className="footer__item">
            <NavLink to="/locations" className="footer__link link">Locations</NavLink>
          </li>
          <li className="footer__item">
            <NavLink to="/contact" className="footer__link link">Contact</NavLink>
          </li>
        </ul>
        <FooterIcons />
      </div>
    </footer> 
  );
}