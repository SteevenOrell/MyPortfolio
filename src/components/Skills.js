import {useState,useEffect} from "react";
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

import { PreviousArrow2 } from "./Icons/PreviousArrow2";
import { NextArrow2 } from "./Icons/NextArrow2";

import ScrollVelocity from "./ScrollVelocity";


function Skills(){

    const cardsMainSkills = [{
        title:"MERN & MEAN Stack",
        content:<p>I am highly proficient in full-stack web development, with expertise across both the <b>MERN (MongoDB, Express.js, React, Node.js)</b> and <b>MEAN (MongoDB, Express.js, Angular, Node.js)</b> stacks. </p>
        },
        {
        title:"OOP Languages",
        content:<p>Beyond web and mobile, I possess strong general-purpose programming skills in <b>C#</b> and <b>Python</b>, underpinned by a solid understanding of Object-Oriented Programming (OOP) principles. I also delve into advanced fields like Artificial Intelligence (AI), specifically Machine Learning. </p>
        },
        {
            title:"Mobile Development",
            content:<p> I'm a skilled mobile developer, proficient in building both native applications for Android using <b>Java</b> and for iOS with <b>Swift</b>. I also utilize <b>React Native Expo</b> for efficient cross-platform development.</p>
        },
       {
        title:"Agile/Scrum & Devops",
        content:<p>Rounding out my profile, my familiarity with Agile Methodology ensures efficient project management, and my knowledge of DevOps practices highlights my ability to contribute across the entire software development lifecycle.</p>
        },
    ]
    const cardsContents = [img1,img2,img3,img4,img5,img6,img7];
    const [width,setWidth] = useState(window.screen.width);
      
    const items =cardsContents.map((img,index)=>{
                    return(<div className={"CardClass1"}  style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover'}} ></div>)
                })   
    const [isPlay,setPlay] = useState(true);
    const [currentTranslate,setTranslate] = useState(0);
                              
  

      useEffect(()=>{

        function handleResize() {
          setWidth(window.screen.width);
        //   setHeight(window.innerHeight);
        }
        window.addEventListener("resize", handleResize)
        handleResize();

        return () => { 
          window.removeEventListener("resize", handleResize)
        }



      },[width])
    function moveToNext(){
        if(currentTranslate > -150 && width>850){
            setTranslate((currentTranslate)=>{ return currentTranslate-40;})
        }
        else if(currentTranslate > -240 && width>=570 && width<=850){
            // console.log("width "+ width)
            setTranslate((currentTranslate)=>{ return currentTranslate-40;})
        }
        else{
            if(currentTranslate > -120){
                // console.log("width > 350"+ width)
                setTranslate((currentTranslate)=>{ return currentTranslate-40;})
            }
            
        }
        
    }
    function moveToPrev(){
        if(currentTranslate < 0 && width>850){
            setTranslate((currentTranslate)=>{ return currentTranslate+40;})
        }
        else if(width<=850 && width>=570 && currentTranslate < 0 ){
            setTranslate((currentTranslate)=>{ return currentTranslate+40;})
        }
        else{
            if(currentTranslate < 0){
                
                setTranslate((currentTranslate)=>{ return currentTranslate+40;})
            }
            
        }
    }  

    return (
      <>

              <div id="CarouselSection1">

            <div id="CarouselDiv1"  >


            <ScrollVelocity baseVelocity={-5} isPaused={!isPlay}>
          
                {items}
            </ScrollVelocity>
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
    

      
     <div className='titleInTheMiddle' id="SkillsSection1"> <FadeInAnimation><h3 ><i> Skills </i></h3></FadeInAnimation></div>
 <div className="CarouselSection2">

            <div id="CarouselDiv2"   style={{ transform:`translateX(${currentTranslate}vh)` }} >

                            {   
                                cardsMainSkills.map((obj,index)=>{

                                    
                                    return(
                                    <div className="CardClass2" key={`Otherskill_${index}`} >
                                        <h4>{obj.title}</h4>
                                        {obj.content}
                                    </div>)
                                })
                            }
                        </div>
                        <div className="PrevNextBtn2" > 
                            <button id="prevArrowBtn2" onClick={moveToPrev}><PreviousArrow2/></button> 
                            <button id="nextArrowBtn2" onClick={moveToNext}><NextArrow2/></button> 
                        </div>
            </div>

 


       </>   
        )

}

export default Skills;