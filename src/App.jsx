import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";



function App() {

  return (
    <div className="bg-stone-900">
      <Navbar />
      <Home />
      <About />
      <Skills />

    </div>
  )
}

export default App
