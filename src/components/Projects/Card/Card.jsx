import "./Card.scss";
import { useState } from "react";

const Card = ({ data, handleClick, index, projectToShow }) => {
  const [windowIsBig, setWindowIsBig] = useState(window.innerWidth > 1060);
  const handleResize = () => {
    setWindowIsBig(window.innerWidth > 1060);
  };

  window.addEventListener("resize", handleResize);

  const { title, shortDesc, skills, id } = data;

  const isActive = id === projectToShow;
  const cardClassName = isActive ? "card card--active" : "card";

  const href = windowIsBig ? "#projects" : "#project";

  return (
    <a href={href} className={cardClassName} onClick={() => handleClick(index)}>
      <p className="card__title">{title}</p>
      <p className="card__brief">{shortDesc}</p>
      <div className="card__line"></div>
      <div className="card__skills">
        <div className="card__skills-left">
          <p className="skill skill1">{skills[0]}</p>
          <p className="skill skill2">{skills[1]}</p>
        </div>
        <div className="card__skills-right">
          <p className="skill skill3">{skills[2]}</p>
          <p className="skill skill4">{skills[3]}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
