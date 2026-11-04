import { FadeInAnimation } from "./FadeInAnimation";
import heroBg from "./assets-copy/ElevenLabs_video_seedance-2-0_the wind sho..._2026-05-08T15_08_32.mp4";

function MainSection(){
    return (
    <div id="HeroDiv1">

        <div id="Carousel-1" className="CarouselHeroSection1">

            <div className="Carousel1-content">
                <FadeInAnimation>
                    <h3>
                        <span id="helloSpan">Welcome</span>
                    </h3>
                </FadeInAnimation>
                <FadeInAnimation><h5> to my World </h5></FadeInAnimation>
            </div>

            <div className="Carousel1-content Carousel1-content--alt">
                <FadeInAnimation><h5> Creative Full-stack </h5></FadeInAnimation>
                <FadeInAnimation>
                    <h3>Developer</h3>
                </FadeInAnimation>
            </div>

<div className="Hero1Animation3D">
                <video autoPlay loop muted playsInline src={heroBg} />
            </div>

        </div>

    </div>
    )
}

export default MainSection;
