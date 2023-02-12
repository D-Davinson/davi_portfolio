import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Langages from "./components/Langages";
import Projects from "./components/Projects";
import Socialink from "./components/Sociallink";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
        <Home />
          <About />
            <Langages />
              <Projects />
                <Socialink />
                  <Footer />
    </div>
  );
}

export default App;
