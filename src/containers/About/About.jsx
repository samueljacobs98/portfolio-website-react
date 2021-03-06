import "./About.scss";
import profileImg from "../../assets/images/profile-img.jpg";
import aboutData from "../../assets/data/aboutData";
import sun from "../../assets/svgs/sun-side.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="about__item-title">About Me</h2>
      <div className="about__container">
        <img className="about__img" src={profileImg} alt="" />
        <div className="about__summary-container">
          <p className="about__item-text">{aboutData.summary1}</p>
          <br />
          <p className="about__item-text">{aboutData.summary2}</p>
        </div>
      </div>
      <img className="about__sun" src={sun} alt="the sun" />
    </div>
  );
};

export default About;
