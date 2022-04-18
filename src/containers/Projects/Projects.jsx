import Card from "../../components/Projects/Card/Card";
import Project from "../../components/Projects/Project/Project";
import moon from "../../assets/svgs/moon.svg";
import "./Projects.scss";
import projectData from "../../assets/data/projectData";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";

const Projects = () => {
  const [windowIsBig, setWindowIsBig] = useState(window.innerWidth > 600);
  const [projects, setProjects] = useState([...projectData]);
  const [toggle, setToggle] = useState(false);
  const [projectToShow, setProjectToShow] = useState(0);
  // console.log(projectData[0]);

  // console.log(projects);

  const handleResize = () => {
    setWindowIsBig(window.innerWidth > 600);
  };

  window.addEventListener("resize", handleResize);

  useEffect(() => {
    const projectsToShow =
      !windowIsBig && toggle ? [...projectData].slice(0, 3) : [...projectData];
    setProjects([...projectsToShow]);
  }, [windowIsBig, toggle]);

  useEffect(() => {
    setToggle(!windowIsBig);
  }, [windowIsBig]);

  useEffect(() => {
    toggle
      ? setProjects([...projectData].slice(0, 3))
      : setProjects([...projectData]);
  }, [toggle]);

  useEffect(() => {
    if (!windowIsBig && projectToShow > 2) setProjectToShow(0);
  }, [windowIsBig]);

  useEffect(() => {
    if (toggle && projectToShow > 2) setProjectToShow(0);
  }, [toggle]);

  const showMore = () => {
    setToggle(!toggle);
  };

  const handleClick = (id) => {
    setProjectToShow(id);
  };

  const handleIncrement = () => {
    projectToShow === projectData.length - 1
      ? setProjectToShow(0)
      : setProjectToShow(projectToShow + 1);
  };

  const handleDecrement = () => {
    projectToShow === 0
      ? setProjectToShow(projectData.length - 1)
      : setProjectToShow(projectToShow - 1);
  };

  const cardListJSX = (
    <>
      {projects.map((project, index) => {
        return (
          <Card
            key={project.id}
            data={project}
            handleClick={handleClick}
            index={index}
            projectToShow={projectToShow}
          />
        );
      })}
    </>
  );

  return (
    <div className="projects" id="projects">
      <Project
        data={projects[projectToShow]}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <main className="projects__container">
        <h3 className="projects__title">Featured Projects</h3>
        {cardListJSX}
        {!windowIsBig && (
          <div className="projects__button-container">
            <Button
              text={toggle ? "Show more..." : "Show less"}
              onClick={showMore}
            />
          </div>
        )}
      </main>
      <img className="projects__moon" src={moon} alt="the moon" />
    </div>
  );
};

export default Projects;
