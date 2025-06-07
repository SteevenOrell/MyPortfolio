import {React} from "react";
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from "motion/react"
import { FadeInAnimation } from "./FadeInAnimation";
import mainHeroSectionMP4 from "./assets-copy/abstractBackground.mp4";
function MainSection(){


    return (
    <div id="HeroDiv1">

        <div id="Carousel-1" className="CarouselHeroSection1">
            
            <div className= "Carousel1-content" >

                    
                    <h3>
                     <FadeInAnimation > {"HELLO WORLD"}</FadeInAnimation>
                    </h3>
                    <p><h5> <FadeInAnimation > {"WELCOME TO MY PORTFOLIO"} </FadeInAnimation></h5></p>
                    
                    
            </div>
            
            <div className="Hero1Animation3D">
                <video autoPlay loop muted playsInline>
                            <source src={mainHeroSectionMP4} type="video/mp4"/>
                </video>


            </div>
            
        </div>
       

        
    </div>
    )

}

export default MainSection;