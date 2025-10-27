import {useState,useEffect} from "react";

import { FadeInAnimation } from "./FadeInAnimation";
import mainHeroSectionMP4 from "./assets-copy/Transparent_Plastic_Film_Wrap_Overlay_Texture_Background_fhd_2214171.mp4";
// import mainImg from './assets-copy/3.jpg'
import MainAnimation from "./MainAnimation";

function MainSection(){

    const [color,setColor] = useState([1, 0.4, 0.1]);

    // useEffect(()=>{
    //     let changeColorInterval = setInterval(()=>{
    //         if(color.toString() == [1, 0.4, 0.1].toString()){
    //             setColor([0.5, 0, 0.8])
    //         }
    //         else{
    //             setColor([1, 0.4, 0.1])
    //         }
    //     },200000);

    //     return () => clearInterval(changeColorInterval)
    // },[color])
    return (
    <div id="HeroDiv1">

        <div id="Carousel-1" className="CarouselHeroSection1">
            
            <div className= "Carousel1-content" >

                    <FadeInAnimation >
                    <h3>
                      <span id="helloSpan">WELCOME</span>
                    </h3>
                    </FadeInAnimation>
                    <FadeInAnimation ><h5> TO MY WORD </h5></FadeInAnimation>
                    
                    
            </div>
            {/* style={{backgroundImage: `url(${mainImg})`}} */}
            <div className="Hero1Animation3D"  >
                {/* <video autoPlay loop muted playsInline>
                            <source src={mainHeroSectionMP4} type="video/mp4"/>
                    </video>  */}
                    
                <MainAnimation
                waveColor={color}
                disableAnimation={false}
                enableMouseInteraction={true}
                mouseRadius={0.3}
                colorNum={4}
                waveAmplitude={0.3}
                waveFrequency={3}
                waveSpeed={0.05}
                /> 
            </div>
            
        </div>
       

        
    </div>
    )

}

export default MainSection;