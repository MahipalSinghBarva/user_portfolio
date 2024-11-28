import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import { StarsCanvas } from "./assets/canvas";
import ProjectDetails from "./components/ProjectDetails";
// import ToggleNavbar from "./components/ToggleNavbar";
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <Router>
      <motion.div
        className="progress-bar fixed top-0 left-0 right-0 h-2 bg-purple-700 origin-left z-10"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern/80 bg-cover bg-no-repeat bg-center">
          <Navbar />

          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />

        <Routes>
          <Route path="/" exact element={<Works />} />
          <Route path="/projects/:id" exact element={<ProjectDetails />} />
        </Routes>
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        {/* <StarsCanvas /> */}
      </div>
    </Router>
  );
}

export default App;
