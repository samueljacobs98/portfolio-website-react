import ProjectLinks from "../ProjectLinks/ProjectLinks";

import "./Project.scss";

const Project = ({ data }) => {
  const { skills, title, desc, img, links } = data;

  const descJSX = desc.map((para, index) => {
    const { id, text } = para;
    return (
      <>
        <p key={id} className="project__para">
          {text}
        </p>
        {index < desc.length - 1 && <br key={"br" + id} />}
      </>
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
    <section className="project">
      <h3 className="project__heading">{title}</h3>
      <img className="project__img" src={img} alt={title} />
      <div className="project__text">{descJSX}</div>
      <div className="project__skills">{skillJSX}</div>
      <ProjectLinks links={links} />
    </section>
  );
};

export default Project;
