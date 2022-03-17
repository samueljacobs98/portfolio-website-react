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
  }, [windowWidth]);

  useEffect(() => {
    toggle
      ? setProjects([...projectData].slice(0, 3))
      : setProjects([...projectData]);
  }, [toggle]);

  const showMore = () => {
    setToggle(!toggle);
  };

  const cardListJSX = (
    <>
      {projects.map((project) => {
        return <Card key={project.id} data={project} />;
      })}
    </>
  );

  return (
    <div className="projects" id="projects">
      <Project />
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
