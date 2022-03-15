import "./Navbar.scss";
const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <a className="navbar__link" href="">
          Home
        </a>
      </li>
      <li>
        <a className="navbar__link" href="">
          Projects
        </a>
      </li>
      <li>
        <a className="navbar__link" href="">
          About
        </a>
      </li>
      <li>
        <a className="navbar__link" href="">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
