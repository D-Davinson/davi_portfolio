import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
        <Home />
          <About />
    </div>
  );
}

export default App;
