import ProjectLinks from "../ProjectLinks/ProjectLinks";
import { Fragment } from "react";
import Button from "../../Button/Button";

import "./Project.scss";

const Project = ({ data, handleIncrement, handleDecrement }) => {
  const { skills, title, desc, img, links } = data;

  const descJSX = desc.map((para, index) => {
    const { id, text } = para;
    return (
      <Fragment key={id}>
        <p className="project__para">{text}</p>
        {index < desc.length - 1 && <br />}
      </Fragment>
    );
  });

  const skillJSX = skills.map((skill) => {
    return (
      <p key={skill} className="project__skill">
        {skill}
      </p>
    );
  });

  return (
    <section id="project" className="project">
      <h3 className="project__heading">{title}</h3>
      <img className="project__img" src={img} alt={title} />
      <div className="project__text">{descJSX}</div>
      <div className="project__skills">{skillJSX}</div>
      <ProjectLinks links={links} />
      <div className="project__update">
        <Button text={"Previous Project"} onClick={handleDecrement} />
        <Button text={"Next Project"} onClick={handleIncrement} />
      </div>
    </section>
  );
};

export default Project;
