import { useRef, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo-dark.png";

export default function Nav() {
  const navMenu = useRef();
  const navShadow = useRef();
  const hamburgerBtn = useRef();
  const hamburgerTop = useRef();
  const hamburgerBottom = useRef();

  const [menuVisibility, setMenuVisibility] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      hamburgerBtn.current.removeAttribute('disabled');

      menuVisibility ?
      navShowCleanUp() :
      navHideCleanUp();
    }, 400);

    return () => clearTimeout(timer);
  }, [menuVisibility]);

  const navShow = () => {  
    hamburgerTop.current.classList.add('flip-top');
    hamburgerBottom.current.classList.add('flip-bottom');
  
    navMenu.current.classList.add('slide-in');
    navShadow.current.classList.add('fade-in');
  
    navMenu.current.classList.remove('hidden');
    navShadow.current.classList.remove('hidden');
  }

  const navShowCleanUp = () => {
    navMenu.current.classList.remove('slide-in');
    navShadow.current.classList.remove('fade-in');
  }
  
  const navHide = () => {;
    hamburgerTop.current.classList.remove('flip-top');
    hamburgerBottom.current.classList.remove('flip-bottom');
  
    navMenu.current.classList.add('slide-out');
    navShadow.current.classList.add('fade-out');
  }

  const navHideCleanUp = () => {
    navMenu.current.classList.add('hidden');
    navMenu.current.classList.remove('slide-out');
    navShadow.current.classList.add('hidden');
    navShadow.current.classList.remove('fade-out');
  }

  const handleHamburgerClick = e => {
    hamburgerBtn.current.setAttribute('disabled', 'true');
    setMenuVisibility(!menuVisibility);

    navMenu.current.classList.contains('hidden') ?
    navShow() :
    navHide();
  }

  return (
    <nav className="nav">
      <div className="nav__wrapper container">
        <Link to="/">
          <img src={logo} alt="Designo company logo." className="logo" />
        </Link>
        {/* Hidden on tablet and desktop */}
        <button
          type="button" 
          aria-label="Open and close navigation menu." 
          className="btn btn--hamburger"
          onClick={handleHamburgerClick}
          ref={hamburgerBtn}
        >
          <span className="hamburger hamburger--top" ref={hamburgerTop}></span>
          <span className="hamburger hamburger--bottom" ref={hamburgerBottom}></span>
        </button>
        {/* Revealed with hamburger button on mobile. Displayed on tablet and desktop. */}
        <div className="nav__menu hidden" ref={navMenu}>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/about" className="nav__link link">Our Company</Link>
            </li>
            <li className="nav__item">
              <Link to="/locations" className="nav__link link">Location</Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link link">Contact</Link>
            </li>
          </ul>
        </div>
        {/* Page overlay revealed with hamburger button on mobile. Removed for tablet and desktop. */}
        <div className="nav__shadow hidden" ref={navShadow}></div>
      </div>
    </nav> 
  );
}
