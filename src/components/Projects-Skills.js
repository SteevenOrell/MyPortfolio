import React from 'react';
import {Carousel} from 'react-bootstrap'
import {Link, BrowserRouter, Switch, Router} from 'react-router-dom';
import chatAppImage from './assets-copy/Capture-ChatApp.JPG'
import CapstoneImage from './assets-copy/CapstoneImages.jpg' 
import RunningAppImage from './assets-copy/RunningTrackAppImages.jpg';
import ProjectsWithoutImages from './assets-copy/PhotoMainSection6.jpg';
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



class ProjectsSkills extends React.Component {
    constructor(props) {
        super(props);
        this.state = { listSrcPhoto: [nodejsLogo,expressLogo,mongodbLogo,reactjsLogo,
            csharpLogo,javaLogo,dotnetLogo,javascriptLogo,oracleLogo,mysqlLogo,pythonLogo,
            swiftLogo,phpLogo,firebaseLogo,mobileAndroidLogo,html5Logo,cssLogo,AiLogo]
        
        }
    }




    skillsBtnOnClick(){
 

var divSkills = document.getElementById("Skills");
var arrow = document.getElementById("arrow");
var paragraphSkills = document.getElementById("paraSkills");
var SkillsPhoto = document.getElementById("SkillsPhoto");

if(arrow.src.includes("downArrow")){
divSkills.style.height = "120%";  
arrow.style.marginBottom = "10%";
SkillsPhoto.style.height = "15%";
arrow.src = upArrow
divSkills.style.transition = "1s";
arrow.style.transition= "1s";

setTimeout(this.AddImages(this.state.listSrcPhoto.length,7),4000);



}

else{

    divSkills.style.height = "62%";

arrow.src = downArrow
SkillsPhoto.style.height = "30%";
divSkills.style.transition = "1s";
arrow.style.transition= "1s";

paragraphSkills.innerHTML=" ";

setTimeout(this.AddImages(7),4000);


}


    }

 AddImages(size,start=0){
    var listSrcPhoto = this.state.listSrcPhoto;
    var paragraphSkills = document.getElementById("paraSkills");
    
    for(var x = start; x<size;x++){
        var image = document.createElement("img");
        var br = document.createElement("br");
        var reactEle = <>{listSrcPhoto[x]}</>
    image.src= reactEle.props["children"]
    console.log(reactEle.props["children"])
    image.className="skillsLogo";        
        
        paragraphSkills.appendChild(image);
        
        if(x != listSrcPhoto.length-1)
        paragraphSkills.appendChild(br);
        paragraphSkills.appendChild(br)
        
        }

 } 

  
    render() { 
   
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
      <p>A realtime chat application allowing persons to chat. </p><p>Technologies used : Socket.io, Express, Node.js, MongoDB, Html5, Jquery</p>
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


<div id="Skills">
<img src={skillsPhoto} id="SkillsPhoto"/>  <br/>

<p id="paraSkills"> <img src={nodejsLogo} className="skillsLogo"/> <br/> <br/> <img src={expressLogo} className="skillsLogo"/> <br/> <br/> 
    <img src={mongodbLogo} className="skillsLogo"/> <br/> <br/> <img src={reactjsLogo} className="skillsLogo"/> <br/> <br/>
    <img src={csharpLogo} className="skillsLogo"/> <br/> <br/> <img src={javaLogo} className="skillsLogo"/> <br/> <br/>
    <img src={dotnetLogo} className="skillsLogo"/> <br/> <br/> 




 </p>
 <div>
 <img src={downArrow} id="arrow" onClick={()=>{this.skillsBtnOnClick()}} />

 </div>

   </div>

        
        </> );
    }
}
 
export default ProjectsSkills;