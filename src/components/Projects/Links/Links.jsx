import github from "../../../assets/svgs/github.svg";
import preview from "../../../assets/svgs/preview.svg";
import "./Links.scss";

const Links = () => {
  return (
    <div className="links">
      <div className="links__container">
        <p className="links__text">Code:</p>
        <img className="links__link" src={github} alt="" />
      </div>
      <div className="links__container">
        <p className="links__text">Code:</p>
        <img className="links__link" src={preview} alt="" />
      </div>
    </div>
  );
};

export default Links;
