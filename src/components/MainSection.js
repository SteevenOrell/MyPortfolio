import {React} from "react";
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from "motion/react"
import { FadeInAnimation } from "./FadeInAnimation";

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
                <Spline scene="https://prod.spline.design/EDAfnUxTAH9Rinj1/scene.splinecode" />


            </div>
            
        </div>
       

        
    </div>
    )

}

export default MainSection;