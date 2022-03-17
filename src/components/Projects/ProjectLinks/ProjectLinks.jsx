import github from "../../../assets/svgs/github.svg";
import preview from "../../../assets/svgs/preview.svg";
import "./ProjectLinks.scss";

const ProjectLinks = () => {
  return (
    <div className="project-links">
      <div className="project-links__container">
        <p className="project-links__text">Code:</p>
        <img className="project-links__link" src={github} alt="" />
      </div>
      <div className="project-links__container">
        <p className="project-links__text">Code:</p>
        <img className="project-links__link" src={preview} alt="" />
      </div>
    </div>
  );
};

export default ProjectLinks;
