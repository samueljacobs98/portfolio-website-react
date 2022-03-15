import "./Links.scss";
import github from "../../../assets/svgs/github.svg";
import preview from "../../../assets/svgs/preview.svg";

const Links = () => {
  return (
    <div className="links">
      <div className="links__container">
        <p className="links__text">Code:</p>
        <img className="links__link" src={github} alt="" srcset="" />
      </div>
      <div className="links__container">
        <p className="links__text">Code:</p>
        <img className="links__link" src={preview} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Links;
