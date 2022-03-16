import React from "react";
import Links from "../Links/Links";
import img2048 from "../../../assets/images/2048screenshot.png";

import "./Project.scss";

const Project = () => {
  const skillJSX = (
    <>
      <p className="project__skill">HTML</p>
      <p className="project__skill">CSS</p>
      <p className="project__skill">JavaScript</p>
      <p className="project__skill">Figma</p>
    </>
  );

  return (
    <section className="project">
      <h3 className="project__heading">2048 Game</h3>
      <img className="project__img" src={img2048} alt="" />
      <p className="project__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quisque
        orci imperdiet sit bibendum. Faucibus interdum adipiscing placerat diam
        velit ac commodo facilisi. Mauris eget tempor nibh phasellus. In
        scelerisque blandit non duis facilisi cursus et. Dictum amet integer non
        amet imperdiet dui, id varius sed. Risus risus senectus eu viverra nisl
        in velit, integer.
      </p>
      <div className="project__skills">{skillJSX}</div>
      <Links />
    </section>
  );
};

export default Project;
