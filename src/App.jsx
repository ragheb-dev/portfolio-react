import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
   <div className={darkMode ? "dark" : "light"}>
      
      <Navbar name="Ragheb"
              darkMode={darkMode}
              setDarkMode={setDarkMode} />
       <Hero />
       <About />
       <Skills />
       <Education />
       <Projects />
       <Contact />
       <Footer />
   </div>
  );
}

export default App;