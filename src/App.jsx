import "./App.scss";
import About from "./containers/About/About";
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
    </>
  );
}

export default App;
