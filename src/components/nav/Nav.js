import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link link">Home</Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className="nav__link link">About</Link>
        </li>
        <li className="nav__item">
          <Link to="/locations" className="nav__link link">Locations</Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
