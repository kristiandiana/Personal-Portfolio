import React from 'react';
import {  Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function AnimatedRoutes() {

  const location = useLocation();

  return (

    <AnimatePresence >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{  opacity: 0.3 }}
          transition={{ duration: 1 }}
          >
            <Home />
          </motion.div>
        } />
        <Route path="/About" element={
          <motion.div>
            <About />
          </motion.div>
        } />
        <Route path="/Projects" element={
          <motion.div>
            <Projects />
          </motion.div>
        } />
        <Route path="/Education" element={
          <motion.div>
            <Education />
          </motion.div>
        } />
        <Route path="/Contact" element={
          <motion.div>
            <Contact />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {

  const location = useLocation();

  const backgroundClass = location.pathname === '/' ? 'bg-transparent' : 'bg-stone-200';

  return (

    

    <div className={`${backgroundClass}  min-h-screen`}>
      <AnimatedRoutes />
    </div>
  
  );
}

export default App;
