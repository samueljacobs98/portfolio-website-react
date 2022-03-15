import Hero from "../../components/Home/Hero/Hero";
import sun from "../../assets/svgs/sun.svg";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <img className="home__sun" src={sun} alt="Sun" />
      <Hero />
      <p className="home__link">
        Click <a href="">here</a> to see some projects
      </p>
    </div>
  );
};

export default Home;
