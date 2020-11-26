import React from 'react';
import NavB from "./components/NavB";
import Footer from "./components/footer";
import './App.css'
import MainSection from './components/MainSection';
import BioResume from './components/Bio-Resume';
import ProjectsSkills from './components/Projects-Skills';
import DiplomeCertif from './components/Diploma-Certificate';

class App extends React.Component {
 state = {  }
  render() { 
    return ( <>
    <NavB/>
    <MainSection/>
    <BioResume/>
    <ProjectsSkills/>
    <DiplomeCertif/>
    <Footer/>
    </> );
  }
}
 


export default App;
