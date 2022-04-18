import "./Links.scss";
import linkLines from "../../assets/svgs/link-lines.svg";
import insta from "../../assets/svgs/instagram-icon.svg";
import github from "../../assets/svgs/github-icon.svg";
import linkedIn from "../../assets/svgs/linkedin-icon.svg";

const Links = () => {
  return (
    <div className="links">
      <a
        href="https://www.linkedin.com/in/samuel-j-66a84ba2/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="links__icon" src={linkedIn} alt="link to linked in" />
      </a>
      <a
        href="https://github.com/samueljacobs98"
        target="_blank"
        rel="noreferrer"
      >
        <img className="links__icon" src={github} alt="link to github" />
      </a>
      <a
        href="https://www.instagram.com/_samuel.jacobs_"
        target="_blank"
        rel="noreferrer"
      >
        <img className="links__icon" src={insta} alt="link to instagram" />
      </a>
      <img
        className="links__lines"
        src={linkLines}
        alt="lines leading to social links"
      />
    </div>
  );
};

export default Links;
