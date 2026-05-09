import React from 'react';
import './App.css';
import NavB from './components/NavB';
import MainSection from './components/MainSection';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import BioCareerGoals from './components/BioCareerGoals';
import Project from './components/Projects';
import Footer from './components/footer';
import CareerGoalsServices from './components/CareerGoalsServices';

function App() {
  return (
    <>
      <NavB />
      <MainSection />
      <Experiences />
      <Project />
      <BioCareerGoals />
      <Skills />
      <CareerGoalsServices />
      <Footer />
    </>
  );
}

export default App;
