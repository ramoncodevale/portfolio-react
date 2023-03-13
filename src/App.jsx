import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";



function App() {

  return (
    <div className="bg-stone-900">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
    </div>
  )
}

export default App
