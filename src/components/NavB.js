import React from 'react';
import {Navbar, Nav,NavDropdown } from 'react-bootstrap';
import HomeLogo from './assets-copy/SteevenWeminLogo.jpg'
import './main.css'



class NavB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    onToggle(){


      var links = document.getElementsByClassName('mr-auto');
      
        links[0].style.marginLeft = 0;

     


     

    }
  
    render() { 
        return ( <>
        <div id="NavBarDiv">
<Navbar className="NavBar" expand="lg" sticky="top">
  <Navbar.Brand href="/" id="homeLogo"><img src={HomeLogo} alt="Home Logo"  width="50" height="30" /></Navbar.Brand>
  <Navbar.Toggle id="toggle" aria-controls="basic-navbar-nav" onClick={()=>{this.onToggle()}}/>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="" className="links">Home</Nav.Link>
      
      <NavDropdown title="My Portfolio's Details" id="basic-nav-dropdown" className="links">
        <NavDropdown.Item href="#BioTextPhoto" className="option" >Bio</NavDropdown.Item>
        <NavDropdown.Item href="#Download" className="option" >Resume</NavDropdown.Item>
        <NavDropdown.Item href="#CareerGoalDiv" className="option">Career Goals</NavDropdown.Item>
        <NavDropdown.Item href="#Carousel" className="option">Projects</NavDropdown.Item>
        <NavDropdown.Item href="#SkillsPhoto"className="option">Skills</NavDropdown.Item>
        <NavDropdown.Item href="#DiplomaCertif"className="option">Degree and Certificate </NavDropdown.Item>
        <NavDropdown.Item href="#experience"className="option" >Experience</NavDropdown.Item>
        
        
       
      </NavDropdown>
      <Nav.Link href="#BioTextPhoto" className="links">About me</Nav.Link>
      <Nav.Link href="#ContactMeImage" className="links">Contact</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
 
</div>
</> );
    }
}
 
export default NavB;