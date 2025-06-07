import React, {useState,useEffect} from "react";
import Spline from '@splinetool/react-spline';
import laptopMP4 from "./assets-copy/Laptop.mp4";
import officeMP4 from "./assets-copy/office.mp4";
function Experiences(){

        const carouselContents = [laptopMP4,officeMP4]
    
        const [currentCarousel,setCurrentCarousel] = useState(1);
        const [width,setWidth] = useState(window.innerWidth);
        const [height,setHeight] = useState(window.innerHeight);



        useEffect(()=>{
        
                function handleResize() {
                  setWidth(window.innerWidth);
                  setHeight(window.innerHeight);
                }
                window.addEventListener("resize", handleResize)
                handleResize();
        
                return () => { 
                  window.removeEventListener("resize", handleResize)
                }
        
        },[])
        function handleCarouselChange(e){
            let index = parseInt(e.target.id.toString().split("-")[1]);
            // console.log("Index "+ index)
            if(index >=0 && !isNaN(index)){
                setCurrentCarousel(index)
            }
    
        }
return (
<>
    <div id="TitleExperience">
        <div>
        <h2>WORK</h2>
        <h4>EXPERIENCE</h4>
        </div>


    </div>
 <div id="HeroDiv2">
        {

            width < 670 ? 
            <div className="mobileHeroDiv2">
                <div className="PeriodCompanyDiv">
                        <h3 className="PeriodExpericence"><i> {currentCarousel == 1 ? "Current - May 2022" : "Oct 2021 - Jul 2021" }</i></h3>
                        <p className="PeriodExpericence"> <h6 >{currentCarousel == 1 ? "Process Fusion Inc" : "AptPay Inc" } </h6></p>
                </div>
                <div id="iconsHeroDiv2">
                    {
                        carouselContents.map((splineLink,index)=>{
                            
                            return(                
                            
                                <button id={`carousel2Btn-${index+1}`} className={ currentCarousel == index+1 ? `carousel2Btn open`: "carousel2Btn"} onClick={(e)=>handleCarouselChange(e)}>
                                    <span id={`carousel2Span-${index+1}`} className="carousel2Span" >
                                        
                                    </span>
                                </button>
                            )
                        })

                    }

                </div>
                <div id="Carousel2-Number">
                    <h1>
                        0{currentCarousel}
                    </h1>

                </div>
                
                {carouselContents.map((videoSrc,index)=>{
                    
                    return(                
                    
                    <div className={currentCarousel == index+1 ? `carousel2-content open`:"carousel2-content"} >
 
                        <video autoPlay loop muted playsInline>
                            <source src={videoSrc} type="video/mp4"/>
                        </video>
                        <div id="HeroDiv2-content2">
                            { 
                                index == 0 ? 
                                <>
                                   <h4> Software Developer</h4>                            
                                        <p> 
                                            <b>Main Technologies: ASP.NET, C#, JavaScript, Azure AI, Oracle </b>
                                            <br/>Creating new solutions or applications based on BRD and clients need to automate their business process. <br/>
                                            Solving and fixing issues with the existing solutions.<br/>
                                            Performing testing and deploying codes.<br/>
                                            Peer code review<br/>
                                            Assigning tasks to Developers.<br/>
                                        </p>
                                </>
                                :
                                <>
                                   <h4> Software Developer Internship</h4>                            
                                        <p> 
                                            <b>Main Technologies: PHP, Laravel, MySql </b>
                                            <br/>Implementing new features to existing application.<br/>
                                            Performing testing and deploying codes.<br/>
                                            Creating documentations and guides for applications helping customers to understand and use products.<br/>
                                            Follow Scrum methodology using Azure DevOps.<br/>
                                            Reporting production issues
                                        </p>                                
                                
                                </>


                            }

                    
                        </div>
                    </div>)
                })}

            </div>
            
            :

            <>
            <div className="titleHeroDiv2">
                
                <h3><i> {currentCarousel == 1 ? "Current - May 2022" : "Oct 2021 - Jul 2021" }</i></h3>
                <p> <h6>{currentCarousel == 1 ? "Process Fusion Inc" : "AptPay Inc" } </h6></p>
                <div id="iconsHeroDiv2">
                    {
                        carouselContents.map((splineLink,index)=>{
                            
                            return(                
                            
                                <button id={`carousel2Btn-${index+1}`} className={ currentCarousel == index+1 ? `carousel2Btn open`: "carousel2Btn"} onClick={(e)=>handleCarouselChange(e)}>
                                    <span id={`carousel2Span-${index+1}`} className="carousel2Span" >
                                        
                                    </span>
                                </button>
                            )
                        })

                    }

                </div>
                <div id="Carousel2-Number">
                    <h1>
                        0{currentCarousel}
                    </h1>

                </div>
            </div>
            <div  className="imgOrvid-carousel2">

                {carouselContents.map((videoSrc,index)=>{
                    
                    return(                
                    
                    <div className={currentCarousel == index+1 ? `carousel2-content open`:"carousel2-content"} >
 
                        <video autoPlay loop muted playsInline>
                            <source src={videoSrc} type="video/mp4"/>
                        </video>
                        <div id="HeroDiv2-content2">
                            { 
                                index == 0 ? 
                                <>
                                   <h4> Software Developer</h4>                            
                                        <p> 
                                            <b>Main Technologies: ASP.NET, C#, JavaScript, Azure AI, Oracle </b>
                                            <br/>Creating new solutions or applications based on BRD and clients need to automate their business process, transforming data, translating their business workflow into automated solutions. <br/>
                                            Solving and fixing issues with the existing solutions.<br/>
                                            Performing testing and deploying codes.<br/>
                                            Peer code review<br/>
                                            Assigning tasks to Developers.<br/>
                                        </p>
                                </>
                                :
                                <>
                                   <h4> Software Developer Internship</h4>                            
                                        <p> 
                                            <b>Main Technologies: PHP, Laravel, MySql </b>
                                            <br/>Implementing new features to existing application.<br/>
                                            Performing testing and deploying codes.<br/>
                                            Creating documentations and guides for applications helping customers to understand and use products.<br/>
                                            Follow Scrum methodology using Azure DevOps.<br/>
                                            Reporting production issues
                                        </p>                                
                                
                                </>


                            }

                    
                        </div>
                    </div>)
                })}

            </div>
        
            </>
        }
            




    </div>
</>)
}

export default Experiences;