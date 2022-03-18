import React from "react";
import ProjectLinks from "../ProjectLinks/ProjectLinks";

import "./Project.scss";

const Project = ({ data }) => {
  const { skills, title, desc, img, links } = data;

  const skillJSX = skills.map((skill) => {
    return (
      <p key={skill} className="project__skill">
        {skill}
      </p>
    );
  });

  return (
    <section className="project">
      <h3 className="project__heading">{title}</h3>
      <img className="project__img" src={img} alt={title} />
      <p className="project__text">{desc}</p>
      <div className="project__skills">{skillJSX}</div>
      <ProjectLinks links={links} />
    </section>
  );
};

export default Project;
