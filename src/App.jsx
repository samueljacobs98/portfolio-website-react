import { useEffect, useState } from "react";
import "./App.scss";
import BackToTop from "./components/BackToTop/BackToTop";
import Links from "./components/Links/Links";
import Menu from "./components/Menu/Menu";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Header from "./containers/Header/Header";
import Home from "./containers/Home/Home";
import Projects from "./containers/Projects/Projects";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      {windowWidth < 800 && <Menu />}
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
      <BackToTop />
      <Links />
    </>
  );
}

export default App;
