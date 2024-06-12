import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TransitionWrapper from './components/TransitionWrapper';

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Hero><TransitionWrapper/></Hero>
          }
        />
        <Route
          path="/projects"
          element={
            <Projects><TransitionWrapper/></Projects>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
