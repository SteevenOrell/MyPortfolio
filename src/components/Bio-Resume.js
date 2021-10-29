import React from 'react';
import {Button} from 'react-bootstrap';
import BioPhoto from './assets-copy/BioPhoto.jpg';
import AboutMe from './assets-copy/Aboutme.JPG';
import { BrowserRouter, Router, Link, Switch} from 'react-router-dom';
import Resume from './assets-copy/SteevenOrell_WEMIN_Resume.pdf';
import CareerGoal from './assets-copy/CareerGoals.JPG'
import Roll from 'react-reveal/Roll';
import Flash from 'react-reveal/Flash';
class BioResume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<BrowserRouter>


            <div className="BioText">
            
            <img src={AboutMe} alt="AboutMePhoto" id="BioTextPhoto"/>
           
            </div>
            
        <div className="container" >

        <img src={BioPhoto} alt="BioPhoto" id="BioPhoto"/> 
        <Flash>
         <p id="bioTextParagraph"> 
        I am Sofware Developer graduated from George Brown College, and I am very passionated and dedicated to computer science. 
        Self motivated, team builder, friendly who is not scared to speak in public.
        I take a lot of time as I can to listen to other opinions and constructive feedback to improve myself if needed.
        I am passionated about sports specially soccer or football, also about music, entrepreneurship.  
            <br></br>
 <a href={Resume} style={{ textDecoration: "none"}}  download="ResumeOfSteevenOrell.pdf"><button id="Download">Download Resume</button></a>
 </p>
 </Flash>
 </div>    
 <Roll right>
<div id="CareerGoalDiv"> 
<img src={CareerGoal} alt="CareerGoal" id="CareerGoalPhoto"/>
<p>

My goal is to gain experiences in my field computer science. 
I want to specifically work in domains where computer science is needed.
I prefer IT, Digital agencies, but I am opened to all propositions. 
I believe that by practicing, and spending time on what we do not know can help us as humain to achieve more than we expected.
Continuous learning is the key to continuous evolution.
I want to be an expert programmer at the end and get enough skills as I can.

</p>

</div>
</Roll>
 </BrowserRouter>
        );
    }
}
 
export default BioResume;