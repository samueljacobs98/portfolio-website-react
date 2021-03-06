import githubSvg from "../../../assets/svgs/github.svg";
import previewSvg from "../../../assets/svgs/preview.svg";
import "./ProjectLinks.scss";

const ProjectLinks = ({ links }) => {
  const { github, deployed } = links;

  return (
    <div className="project-links">
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="project-links__container"
      >
        <p className="project-links__text">Code:</p>
        <img className="project-links__link" src={githubSvg} alt="" />
      </a>

      {deployed !== "" && (
        <a
          href={deployed}
          target="_blank"
          rel="noreferrer"
          className="project-links__container"
        >
          <p className="project-links__text">Preview:</p>
          <img className="project-links__link" src={previewSvg} alt="" />
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
