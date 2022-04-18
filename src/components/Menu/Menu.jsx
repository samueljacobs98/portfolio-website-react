import "./Menu.scss";
import hamburger from "../../assets/svgs/hamburger.svg";
import closeBtn from "../../assets/svgs/close-button.svg";
import logo from "../../assets/svgs/logo.svg";
import { useState } from "react";
import Links from "../Links/Links";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {!showMenu && (
        <button onClick={toggleMenu}>
          <img className="hamburger" src={hamburger} alt="Open menu" />
        </button>
      )}
      {showMenu && (
        <>
          <menu className={showMenu ? "menu" : "menu menu--inactive"}>
            <img
              className="menu__close"
              src={closeBtn}
              alt="Open menu"
              onClick={toggleMenu}
            />
            <img
              className="menu__logo"
              src={logo}
              alt="Open menu"
              onClick={toggleMenu}
            />
            <ul className="menu__links">
              <li>
                <a className="menu__link" href="#projects" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a className="menu__link" href="#about" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a className="menu__link" href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
            <Links />
          </menu>
        </>
      )}
    </>
  );
};

export default Menu;
