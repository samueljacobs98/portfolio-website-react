import Card from "../../components/Projects/Card/Card";
import Project from "../../components/Projects/Project/Project";
import moon from "../../assets/svgs/moon.svg";
import "./Projects.scss";
import projectData from "../../assets/data/projectData";
import { useEffect, useState } from "react";

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [projects, setProjects] = useState([...projectData]);
  const [toggle, setToggle] = useState(true);
  const [projectToShow, setProjectToShow] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  useEffect(() => {
    const projectsToShow =
      windowWidth < 600 && toggle
        ? [...projectData].slice(0, 3)
        : [...projectData];
    setProjects([...projectsToShow]);
    setToggle(windowWidth > 600 ? false : true);
  }, [windowWidth, toggle]);

  useEffect(() => {
    toggle
      ? setProjects([...projectData].slice(0, 3))
      : setProjects([...projectData]);
  }, [toggle]);

  const showMore = () => {
    setToggle(!toggle);
  };

  const handleClick = (id) => {
    setProjectToShow(id);
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

  const ProjectJSX = <Project data={projects[projectToShow]} />;

  return (
    <div className="projects" id="projects">
      {ProjectJSX}
      <main className="projects__container">
        <h3 className="projects__title">Featured Projects</h3>
        {cardListJSX}
        {toggle && windowWidth < 600 && (
          <button className="projects__show-more" onClick={showMore}>
            Show more...
          </button>
        )}
        {!toggle && windowWidth < 600 && (
          <button className="projects__show-more" onClick={showMore}>
            Show less...
          </button>
        )}
      </main>
      <img className="projects__moon" src={moon} alt="the moon" />
    </div>
  );
};

export default Projects;
