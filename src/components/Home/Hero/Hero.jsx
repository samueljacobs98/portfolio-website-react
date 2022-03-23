import "./Hero.scss";
import earth from "../../../assets/svgs/earth.svg";
const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__heading">Hi, I'm Samuel</h1>
      <p className="hero__text">
        a software engineer based
        <br />
        in London, England
      </p>
      <img className="hero__earth" src={earth} alt="planet earth" />
    </div>
  );
};

export default Hero;
