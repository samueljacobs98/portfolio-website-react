import Card from "../../components/Projects/Card/Card";
import Project from "../../components/Projects/Project/Project";
import sectionBtn from "../../assets/svgs/section-button.svg";
import moon from "../../assets/svgs/moon.svg";
import "./Projects.scss";

const Projects = () => {
  const cardListJSX = (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );

  return (
    <div className="projects">
      <Project />
      <main className="projects__container">
        <h3 className="projects__title">Projects</h3>
        {cardListJSX}
      </main>
      <div className="projects__next">
        <img
          className="projects__next-btn"
          src={sectionBtn}
          alt="jump to about me"
          srcset=""
        />
      </div>
      <img className="projects__moon" src={moon} alt="" srcset="" />
    </div>
  );
};

export default Projects;
