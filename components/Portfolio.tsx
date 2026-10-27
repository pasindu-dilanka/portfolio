"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Certifications from "./Certifications";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import SetupGuideModal from "./SetupGuideModal";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  // Sync state with HTML dark class for Tailwind
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark bg-slate-950 text-slate-100 min-h-screen font-sans" : "bg-slate-50 text-slate-900 min-h-screen font-sans transition-colors duration-300"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
      <SetupGuideModal darkMode={darkMode} />
    </div>
  );
}