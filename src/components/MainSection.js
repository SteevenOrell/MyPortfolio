import React from 'react';
import './main.css';
import imageMainMenu from './assets-copy/PhotoMainSection.jpg';

class MainSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <>
        <div id="MainDiv">
            <div id="divOne"> <h1>Steeven Orell <br/> <span>WEMIN</span></h1> 
            <p> Junior Software Developer</p>
            </div>
        <div >
               
<img id="imageMainMenu" src = {imageMainMenu} alt="main menu picture"/>
</div>
</div>
</>
        
       );
    }
}
 
export default MainSection;