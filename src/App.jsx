import React from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Introduction />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Publications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
