import Card from "../../components/Projects/Card/Card";
import Project from "../../components/Projects/Project/Project";
import moon from "../../assets/svgs/moon.svg";
import "./Projects.scss";
import projectData from "../../assets/data/projectData";

const Projects = () => {
  const cardListJSX = (
    <>
      {projectData.map((project) => {
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
      </main>
      <img className="projects__moon" src={moon} alt="" />
    </div>
  );
};

export default Projects;
