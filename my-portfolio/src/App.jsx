import React from "react";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About"; 
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="scroll-smooth bg-gray-900 text-gray-200">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Main Sections */}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
