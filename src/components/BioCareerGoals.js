import React, {useRef, useLayoutEffect, useState} from 'react';
import Spline from '@splinetool/react-spline';
import { FadeInAnimation } from './FadeInAnimation';
import { SlideInAnimation } from './SlideInAnimation';
import { SlideInAnimation2 } from './SlideInAnimation2';

function BioCareerGoals()  {

        return (<>
        <div  id="BioCareer">


            <div className="BioText">
            
                <h4><i> <FadeInAnimation> {"INTRODUCTION"} </FadeInAnimation> </i></h4>
           
            </div>
            
        <div className="containerBio" >

        
        <FadeInAnimation>
            {
                <p id="bioTextParagraph"> 
                      A Problem solver, quick learner, teamwork person and self-motivated software developer with <b> three years of experience </b> working, providing software solutions to clients for Business Process Automation, in addition of building web and mobile applications. A curious learner willing to provide excellent solutions to exceed requirements assigned. Looking to work individually or with a team, collecting applications’ requirements, designing mobile or web, software applications, developing, implementing, and testing applications’ codes.   
                
                    <br></br>
                </p>
            }
            </FadeInAnimation>
        </div>    
 


        </div>


        <div id="HeroDiv2">

            <div id="Carousel-2" className="CarouselHeroSection1">

                <div className= "Carousel2-content" >
                    <h3><FadeInAnimation> {"ANOTHER LIGHT"}</FadeInAnimation> </h3>
                    <p><FadeInAnimation> {"ON THE PATH TO SHINE"}</FadeInAnimation></p>
                </div>
                <div className="Hero2Animation3D">
                    <Spline scene="https://prod.spline.design/QuXMT5JED1WIHBl7/scene.splinecode" />
                     

                </div>
                
            </div>
        

            
        </div>
            <div id="CareerGoalDiv" >
                    <div id='CareerGoalsTitle' >
                        <h2><i> Career Goals </i></h2>
                    </div>
                    <div id='CareerGoalsDetails' >
                                <SlideInAnimation>
                                    {
                                <div>
                                    <h4><i> Gain Experience </i></h4>
                                    <p>
                                        My goal is to gain experiences in my field computer science. 
                                        I prefer to work with clients on projects (Website, mobile, applications etc...), I am opened to all propositions in Freelance. 
                                    </p>
                                </div>}
                                </SlideInAnimation>
                                <SlideInAnimation2>{
                                <div>
                                    <h4><i> Learn and Share </i></h4>
                                    <p>
                                    Every lesson learned, every experiment conducted, and every test performed will be driven by a singular purpose: to lead, empower, and share knowledge. 
                                    My goal is to cultivate leadership skills not just for personal growth, but to actively mentor and assist others, particularly new graduates who face challenges in securing their first job. I aim to create pathways and provide the guidance.  </p>
                                </div>}
                                </SlideInAnimation2>
                                <SlideInAnimation>
                                <div>
                                    <h4><i> Create an Agency </i></h4>
                                    <p>
                                    My plan is to establish an agency dedicated to helping clients thrive in the digital landscape. 
                                    The core services will initially focus on website and mobile app development.  </p>
                                </div>
                                </SlideInAnimation> 
                    </div>                  
                   

            </div>
       </> );
    }

 
export default BioCareerGoals;