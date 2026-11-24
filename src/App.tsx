import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CursorFollower } from './components/CursorFollower';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 dark:bg-[#0b0f17] dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <CursorFollower />
      <Navbar />
      <main className="relative z-10 flex-1">
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default App;
