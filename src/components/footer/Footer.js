import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo-light.png";
import FooterIcons from "./FooterIcons";

export default function Footer(props) {
  
  return (
    <footer className={props.footerClass}>
      <div className="footer__wrapper container">
        <NavLink to="/" aria-label="Link to home page." className="logo">
          <img src={logo} alt="" className="logo__icon"/>
        </NavLink>
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
        <address className="footer__address">
          <span className="bold">Designo Central Office</span>
          <br />
          3886 Wellington Street
          <br />  
          Toronto, Ontario M9C 3J5
        </address>
        <address className="footer__address">
          <span className="bold">Contact Us (Central Office)</span>
          <br />
          P : <span aria-label="Company phone number.">+1 253-863-8967</span>
          <br />
          M : <span aria-label="Company email.">contact@designo.co</span>
        </address>
        <FooterIcons />
      </div>
    </footer> 
  );
}