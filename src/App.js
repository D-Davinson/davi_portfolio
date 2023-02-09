import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Langages from "./components/Langages";

function App() {
  return (
    <div>
      <Navbar />
        <Home />
          <About />
            <Langages />
    </div>
  );
}

export default App;
