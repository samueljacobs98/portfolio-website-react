import "./App.scss";
import BackToTop from "./components/BackToTop/BackToTop";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Header from "./containers/Header/Header";
import Home from "./containers/Home/Home";
import Projects from "./containers/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
      <BackToTop />
    </>
  );
}

export default App;
