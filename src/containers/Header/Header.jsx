import logo from "../../assets/svgs/logo.svg";
import Navbar from "../../components/Navbar/Navbar";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img className="logo__svg" src={logo} alt="Samuel Jacobs Logo" />
      <Navbar />
    </div>
  );
};

export default Header;
