import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo-dark.png";
import clsx from "clsx";

export default function Nav() {
  const [menuVisibile, setMenuVisibile] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisabled(false);

      menuVisibile ?
      setAnimateIn(false) :
      setAnimateOut(false);

      !menuVisibile && setHidden(true);
    }, 400);

    return () => clearTimeout(timer);
  }, [menuVisibile]);

  const handleHamburgerClick = e => {
    setDisabled(true);
    setHidden(false);
    setMenuVisibile(!menuVisibile);

    !menuVisibile ?
    setAnimateIn(true) :
    setAnimateOut(true);
  }

  return (
    <nav className="nav">
      <div className="nav__wrapper container">
        <NavLink to="/" aria-label="Link to home page." className="logo">
          <img src={logo} alt="" className="logo__icon"/>
        </NavLink>
        {/* Hidden on tablet and desktop */}
        <button
          type="button" 
          aria-label="Open and close navigation menu." 
          className="btn btn--hamburger"
          disabled={disabled}
          onClick={handleHamburgerClick}
        >
          <span 
            className={clsx({
              "hamburger": true,
              "hamburger--top": true,
              "flip-top": menuVisibile
            })}
          />
          <span 
            className={clsx({
              "hamburger": true,
              "hamburger--bottom": true,
              "flip-bottom": menuVisibile
            })}
          />
        </button>
        {/* Revealed with hamburger button on mobile. Displayed on tablet and desktop. */}
        <div 
          className={clsx({
            "nav__menu": true,
            "hidden": hidden,
            "slide-in": animateIn,
            "slide-out": animateOut
          })}
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/about" className="nav__link link">Our Company</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/locations" className="nav__link link">Locations</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/contact" className="nav__link link">Contact</NavLink>
            </li>
          </ul>
        </div>
        {/* Page overlay revealed with hamburger button on mobile. Removed for tablet and desktop. */}
        <div 
          className={clsx({
            "nav__shadow": true,
            "hidden": hidden,
            "fade-in": animateIn,
            "fade-out": animateOut
          })}
        />
      </div>
    </nav> 
  );
}
