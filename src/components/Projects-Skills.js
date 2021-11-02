import React from 'react';
import {Carousel} from 'react-bootstrap'

import chatAppImage from './assets-copy/Capture-ChatApp.JPG'
import CapstoneImage from './assets-copy/CapstoneImages.jpg' 
import RunningAppImage from './assets-copy/RunningTrackAppImages.jpg';
import ProjectsWithoutImages from './assets-copy/giphy.gif';
import upArrow from './assets-copy/arrowUp.png';
import downArrow from './assets-copy/downArrow.png';
import skillsPhoto from './assets-copy/SkillsPhoto.JPG';
import AiLogo from './assets-copy/skillslogo/Ai.jpg';
import csharpLogo from "./assets-copy/skillslogo/csharp.png";
import cssLogo from "./assets-copy/skillslogo/css.png";
import dotnetLogo from "./assets-copy/skillslogo/dotnet.png";
import expressLogo from './assets-copy/skillslogo/expressjs.png';
import firebaseLogo from './assets-copy/skillslogo/firebase.png';
import html5Logo from './assets-copy/skillslogo/html5.png';
import javaLogo from './assets-copy/skillslogo/java.png';
import javascriptLogo from './assets-copy/skillslogo/javascript.png';
import mobileAndroidLogo from './assets-copy/skillslogo/mobileAndroid.png';
import mongodbLogo from './assets-copy/skillslogo/mongodb.png';
import mysqlLogo from "./assets-copy/skillslogo/mysql.png";
import nodejsLogo from './assets-copy/skillslogo/nodejs.png';
import oracleLogo from "./assets-copy/skillslogo/oracle.png";
import phpLogo from "./assets-copy/skillslogo/php.png";
import pythonLogo from "./assets-copy/skillslogo/python.png";
import reactjsLogo from "./assets-copy/skillslogo/reactjs.png";
import swiftLogo from "./assets-copy/skillslogo/swift.png";
import Roll from 'react-reveal/Roll';
import Flash from 'react-reveal/Flash';
import  CarouselPrimeReact  from 'primereact/carousel';
import  ButtonPrimeReact  from 'primereact/button';
import mainIm2 from './assets-copy/mainIm2.gif';
import allcompetes from './assets-copy/skillslogo/Allcompetences.jpeg';

class ProjectsSkills extends React.Component {
    constructor(props) {
        super(props);
        this.state = { listSrcPhoto: [nodejsLogo,firebaseLogo,mongodbLogo,reactjsLogo,expressLogo,
            csharpLogo,phpLogo,dotnetLogo,javascriptLogo,oracleLogo,mysqlLogo,pythonLogo,
            swiftLogo,mobileAndroidLogo,html5Logo,cssLogo,AiLogo,javaLogo],
            
        }

      


    }

componentDidMount(){

  if(window.innerWidth <= 640){
    this.removeCarouselIm()
    
    var skillsDiv = document.getElementById("Skills");
    var skillsCarousel = document.getElementById("SkillCarousel");
    skillsCarousel.remove();
    var imgSkills = document.createElement('img');
    imgSkills.src = allcompetes;
    imgSkills.style.width = "110%";
    imgSkills.style.height = "95%"; 
    skillsDiv.appendChild(imgSkills)
  }
  
}
   


 removeCarouselIm(){
var images = document.getElementsByClassName("carousel-item");



 for(var x=0;x<images.length;x++){

console.log(images[x]);
images[x].removeChild(images[x].childNodes[0])

 }

 }

 
  
    render() { 
     let listOfCard = this.state.listSrcPhoto.map(x=>{
       return <div className="card"> <img src={x} /> </div>
     })

        return ( 
        
        
        <> 
       
        <Carousel id="Carousel">
  <Carousel.Item>
    <img
      className="CarouseImages"
      src= {chatAppImage} 
      alt="ChatApp slide"
    />
    <Carousel.Caption>
      <h3>Chat Application</h3>
      <p>A realtime chat application allowing persons to chat. Not designed for mobile. </p><p>Technologies used : Socket.io, Express, Node.js, MongoDB, Html5, Jquery</p>
      <a href='https://chat-app-assignment1-101091788.herokuapp.com/'><button>View more</button></a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   
    <img
      className="CarouseImages1"
      
      src={RunningAppImage}
      alt="RunningApp slide"
    />

    <Carousel.Caption>
        <div className="MobileApp">
      <h3>Running Track Application</h3>
      <p>A realtime mobile application allowing user to track distances run through, saved and shared.</p>
      <p>Technologies used : Java,Android Studio, Google Api,Sqlite</p>
      <a href='https://github.com/SteevenOrell/Prototype_2_Group_12-final-version-mobileapp'><button>View more</button></a>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="CarouseImages1"
     
      src={CapstoneImage}
      alt="capstone slide"
    />

    <Carousel.Caption>
        <div className="MobileApp">
    <h3>Pocket Meal Application</h3>
      <p>A mobile application allowing user to communicate with persons who need healthy food instead of wasting it</p>
      <p>Food list are dynamically shown by person near user's location</p>
      <p>Technologies used : Firebase,Java,Android Studio, Google Api</p>
      <a href='https://github.com/SteevenOrell/CapstoneProject-PocketMealSystem'><button>View more</button></a>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="CarouseImages"
      
      src={ProjectsWithoutImages}
      alt="Other projects slide"
      height="700px"
    />

    <Carousel.Caption>
        <div id="LastCarousel">
      <h3>Other Projects</h3>
      <p>Web, Windows, IOS Applications build using ASP.NET, C#, Sql, React, Python etc... </p>
      <a href='https://github.com/SteevenOrell?tab=repositories'><button>View more</button></a>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Roll left>

<div id="Skills">
<img src={skillsPhoto} id="SkillsPhoto"/>  <br/>
  <div id="SkillCarousel">

{listOfCard}

  </div>


   </div>

   </Roll>
        </> );
    }
}
 
export default ProjectsSkills;