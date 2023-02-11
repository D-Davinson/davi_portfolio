import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Langages from "./components/Langages";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
        <Home />
          <About />
            <Langages />
              <Projects />
    </div>
  );
}

export default App;
