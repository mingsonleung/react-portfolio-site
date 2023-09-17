import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
