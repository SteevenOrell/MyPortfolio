import React from 'react';
import NavB from "./components/NavB";

import './App.css'
import MainSection from './components/MainSection';


import {Link, BrowserRouter, Switch, Router} from 'react-router-dom';
import logoSW from './components/assets-copy/SteevenWeminLogo.jpg';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import BioCareerGoals from './components/BioCareerGoals';
import Project from './components/Projects';
import Footer from './components/footer';



class App extends React.Component {
 state = {  }



 
  render() { 

    return ( <>
    
    
    
    <NavB/>
    <MainSection/>
    <BioCareerGoals/>
    
    <Skills/>
    <Experiences/>
    <Project/>
    <Footer/>
    
   
    </> );
  }
}
 


export default App;
