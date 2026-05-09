import React, { useState, Fragment } from 'react';
import stepsImg from './assets-copy/Wooden_Steps_Made_Of_Blocks_As_An_Idea_O_original_2526881.jpg';
import learnShareImg from './assets-copy/LearnAndShareImg.png';
import createImg from './assets-copy/The_Chalk-drawn_Staircase_Goes_Up_original_1877682.jpg'


function CareerGoalsServices()  {
    const [currentCarousel,setCurrentCarousel] = useState(0);
    const carouselContents = [
        {title:"GAIN EXPERIENCE", imgOrVid:stepsImg, description:"My goal is to gain experiences in my field computer science. I prefer to work with clients on projects (Website, mobile, applications etc...), I am opened to all propositions in Freelance."},
        {title:"LEARN AND SHARE", imgOrVid:learnShareImg, description:"Every lesson learned drives a singular purpose: to lead, empower, and share knowledge. I aim to mentor others and create pathways for new graduates breaking into the field."},
        {title:"CREATE AN AGENCY",imgOrVid:createImg, description:" My plan is to establish an agency dedicated to helping clients thrive in the digital landscape. The core services will initially focus on website and mobile app development. "}
    ]

    function handleCarouselChange(e){
        const index = parseInt(e.target.id.toString().split("-")[1]);
        if(index >= 0 && !isNaN(index)){
            setCurrentCarousel(index)
        }

    }    
    return (<>
    

            <div id="CareerGoalDiv" >
                
                <div className='CareerGoalsDetails'  >
                    <div className="careerGoalParagraph" >   
                     
                        <h2><i> Career Goals</i> </h2>
                                
                        <p> 
                            {carouselContents[currentCarousel].description}
                        </p>
                        <div id="iconsHeroDiv2">
                            {
                                carouselContents.map((content,index)=>{
                                    
                                    return(                
                                    
                                        <button  key={`carousel2Btn-${content.title}-${index}`} id={`carousel2Btn-${index}`} className={ currentCarousel === index ? `carousel2Btn open`: "carousel2Btn"} onClick={(e)=>handleCarouselChange(e)} onPointerEnter={(e)=>handleCarouselChange(e)}>
                                            <span id={`carousel2Span-${index}`} className="carousel2Span" onClick={(e)=>handleCarouselChange(e)} onPointerEnter={(e)=>handleCarouselChange(e)}>
                                                
                                            </span>
                                        </button>
                                    )
                                })

                            }

                        </div>
                    </div>
                    {carouselContents.map((content,index)=>(
                        <Fragment key={`carousel_End_${index}`}>
                            <div className={currentCarousel === index ? `careerGoalImgTitle open`:"careerGoalImgTitle"}>
                                <img src={content.imgOrVid} alt={`carouselImg-${index}`} />
                                <h1>{content.title}</h1>
                                <div className="Carousel2-Number">
                                    <h3>
                                        (0{currentCarousel+1})
                                    </h3>
                                </div>
                            </div>
                        </Fragment>
                    ))}

        
                </div>                  
                   

            </div>
       </> );
    }

 
export default CareerGoalsServices;