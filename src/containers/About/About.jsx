import "./About.scss";
import profileImg from "../../assets/images/profile-img.jpg";
import aboutData from "../../assets/data/aboutData";

const About = () => {
  return (
    <div className="about" id="about">
      {/* <h2 className="about__title">About</h2> */}
      <div className="about__content-container">
        <img className="about__img" src={profileImg} alt="" />
        <div className="about__container">
          <div className="about__container-item">
            <h3 className="about__item-title">Software Engineer</h3>
            <p className="about__item-text">{aboutData.softEng}</p>
          </div>
          <div className="about__container-item">
            <h3 className="about__item-title">Education</h3>
            <p className="about__item-text">{aboutData.edu}</p>
          </div>
          <div className="about__container-item">
            <h3 className="about__item-title">Photography</h3>
            <p className="about__item-text">{aboutData.photo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
