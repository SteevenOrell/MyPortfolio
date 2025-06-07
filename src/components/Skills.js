import {useState, useRef} from "react";
import img1 from "./assets-copy/skillslogo/JSLogo.png";
import img2 from "./assets-copy/skillslogo/React.png";
import img3 from "./assets-copy/skillslogo/nodejs.png";
import img4 from "./assets-copy/skillslogo/python.png";
import img5 from "./assets-copy/skillslogo/java.png";
import img6 from "./assets-copy/skillslogo/csharp.png";
import img7 from "./assets-copy/skillslogo/php.png";
import { PlayPause } from "./Icons/PlayPause";
import { PauseIcon } from "./Icons/Pause";
import { FadeInAnimation } from "./FadeInAnimation";

function Skills(){

    const cardsContents = [img1,img2,img3,img4,img5,img6,img7];
    const carouselDiv1Ref = useRef();

    const [isPlay,setPlay] = useState(false);


    return (
      <>
        <div  id="SkillsSection1">
        
            <FadeInAnimation><h3><i> SKILLS </i></h3></FadeInAnimation>
         <FadeInAnimation>   <p> 

I possess a robust and well-rounded skill set in software development, covering multiple critical areas. 
I am highly proficient in full-stack web development, with expertise across both the <b>MERN (MongoDB, Express.js, React, Node.js)</b> and <b>MEAN (MongoDB, Express.js, Angular, Node.js)</b> stacks. 
My capabilities extend to traditional web technologies like <b>PHP</b> and its framework <b>Laravel</b>, as well as Microsoft's <b>ASP.NET</b>. In mobile development, I am adept at building native applications for both Android using <b>Java</b> and iOS with <b>Swift</b>. 
Beyond web and mobile, I possess strong general-purpose programming skills in <b>C#</b> and <b>Python</b>, underpinned by a solid understanding of Object-Oriented Programming (OOP) principles. I also delve into advanced fields like Artificial Intelligence (AI), specifically Machine Learning. 
Rounding out my profile, my familiarity with Agile Methodology ensures efficient project management, and my knowledge of DevOps practices highlights my ability to contribute across the entire software development lifecycle.
            </p></FadeInAnimation>
        
        </div>

      
        <div id="CarouselSection1">

            <div id="CarouselDiv1" ref={carouselDiv1Ref} >

            {   
                cardsContents.map((path,index)=>{

                    let animationDelayCalc = `calc(10s/${cardsContents.length}*(${cardsContents.length - index+1}) * -1)`
                    return(
                    <div className={isPlay? "CardClass1":"CardClass1 paused"}  style={{ backgroundImage: `url(${path})`, backgroundSize: 'cover', animationDelay: animationDelayCalc}} >
                        
                    </div>)
                })
            }
            </div>
            <div id="PlayStopCarousel" 
                onClick={()=>{   
                        if(!isPlay){ 
                            setPlay(true);
                        }else{

                            setPlay(false)
                            
                        }
                    }
                }
            > <button >{isPlay ? <PauseIcon/>: <PlayPause/>}</button> </div>
        </div>
       </>   
        )

}

export default Skills;