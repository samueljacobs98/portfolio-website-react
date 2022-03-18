import "./Navbar.scss";
const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <a className="navbar__link" href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a className="navbar__link" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="navbar__link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
