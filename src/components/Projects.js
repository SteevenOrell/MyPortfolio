import React, { useState, useEffect, useRef } from 'react';

// Import local assets
import ecomWebsite from './assets-copy/EcomWebsite.png';
import ecomWebsite2 from './assets-copy/EcomWebsite2.png';
import ecomWebsite3 from './assets-copy/EcomWebsite3.png';
import ecomWebsite4 from './assets-copy/EcomWebsite4.png';
import wcc1Img from './assets-copy/WccImg1.png';
import wccImg2 from './assets-copy/WccImg2.png';
import wccImg3 from './assets-copy/WccImg3.png';
import wccImg4 from './assets-copy/WccImg4.png';
import chatAppImg from './assets-copy/Capture-ChatApp.JPG';
import capstoneImg from './assets-copy/CapstoneImages.jpg';

import projectVid1 from './assets-copy/EcomWebAppTest.mp4';
import projectVid2 from './assets-copy/WayandaWebTest.mp4';
import emptyProjectVid1 from './assets-copy/Transparent_Plastic_Film_Wrap_Overlay_Texture_Background_fhd_2214171.mp4';
import projectMobileVid1 from './assets-copy/Oct-15-2025-1760559225_1722441.mov';
import projectMobileVid2 from './assets-copy/Oct-15-2025-1760559357_7705660.mov';
import { Sidebar } from 'primereact/sidebar';


import { SlideInAnimation } from './SlideInAnimation';



const Project = ()=>{

  const [widthScreen,setWidth] = useState(window.screen.width)
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [visible, setVisible] = useState(false);
  const [currentProject,setCurrentProjectDisplay] = useState(0);
    
  const projectsData = [
    {
      title: 'Wayanda Website',
      description: 'This website connects skilled, compassionate barbers to nursing homes across Ontario to offer in-home haircuts to elderly residents. Built with React, Tailwind.css, Email.js, Prime React.',
      link:"https://github.com/SteevenOrell/WayandaCC",
      imgArray: [wcc1Img, wccImg2, wccImg3, wccImg4],
      videoProject: projectMobileVid2 //projectVid2 :
    },
    {
      title: 'Ecommerce App',
      description: 'A CRUD ECOM APP... Features includes view products list (With pagination), search product, view product details, sign in to account, edit Profile account etc...',
      link:"https://github.com/SteevenOrell/PracticeEcommerceWebsite",
      imgArray: [ecomWebsite, ecomWebsite2, ecomWebsite3, ecomWebsite4],
      videoProject: widthScreen >= 550 ? projectVid1 : projectMobileVid1// //projectVid1 :
    },

    {
      title: 'Chat Application',
      description: 'A realtime chat application allowing persons to chat. Not designed for mobile. Technologies used : Socket.io, Express, Node.js, MongoDB, Html5, Jquery',
      link:"https://github.com/SteevenOrell/chat-app-assignment",
      imgArray: [chatAppImg],
      videoProject: emptyProjectVid1
    },

    {
      title: 'Pocket Meal App',
      description: 'A mobile application allowing user to communicate with persons who need healthy food instead of wasting it. Food list are dynamically shown by person near user\'s location.',
      link:"https://github.com/SteevenOrell/CapstoneProject-PocketMealSystem",
      imgArray: [capstoneImg],
      videoProject: emptyProjectVid1
    },
];

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



},[widthScreen])
  



  return (
  <>
      <Sidebar visible={visible} onHide={() => setVisible(false)} className='Sidebar' fullScreen>
            <h4>{projectsData[currentProject].title}</h4>
            <p>
               {projectsData[currentProject].description}
            </p>
            <a href={projectsData[currentProject].link} target='_blank' rel="noreferrer">Github link</a>
            <div className="swiper mySwiper mb-10 py-10">
              <div className="swiper-wrapper">
            {
              
              projectsData[currentProject].imgArray.map((img,index)=>{
                return(  
            
          
                    <div className="swiper-slide" key={`swiper_${index}`}>
                      <div key={`w_full_h_full_img${index}`} className="w-full-h-full-img">
                        <img key={`img_project_detail_${index}`} 
                          src={img}
                          alt=''
                          className="w-full h-full object-cover mx-auto"
                        />
                      </div>
                    </div>
                )
              })
            }
              </div>
            </div>
            
        </Sidebar>

  <div id="ProjectDiv">
    <div className='titleInTheMiddle' id='titleOnSide'> <h3 >Latest Projects</h3> </div>
   
    <div className="ProjectContainer" ref={containerRef} >
      {

      projectsData.map((projectItem,index)=>{
      //className='CardProjectDiv'  ,transform: index !== 0 ? widthScreen <=250 ?`translate(0%,${555*index}px)`:'translate(0%,100%);': 'translate(0%,0%);' 
      return(
         index === 0 ? 
        <SlideInAnimation>   
      <div id={`card_${index}`}  className='CardProjectDiv'  style={{ zIndex:  index+1 ,backgroundSize:"cover"}}
      ref={(el) => (cardsRef.current[index] = el)} key={`card_${index}`} 
      
      >         
                <video key={`videoCard_${index}`} autoPlay loop muted playsInline id={`videoCard_${index}`} className={index !==0  || index === projectsData.length-1? 'CardVideoProject-variant':'CardVideoProject'}  onClick={(e) =>{if(e !=null && e.target.id !=null) {setVisible(true); setCurrentProjectDisplay(e.target.id.split("_")[1])}}}>
                            <source src={projectItem.videoProject} type="video/mp4"/>
                </video> 
                <div key={`diagonalLine_${index}`} className={index !==0  ? 'diagonalLine1':'diagonalLine2'}></div>
                <div key={`projTitle_${index}`}  className={index !==0 && index !== 1 ? 'TitleProject':'TitleProject-variant'}  id={`projTitle_${index}`} >
                  <h3 key={`h4_${index}`}  id={`h4_${index}`} >{projectItem.title}</h3>
                  <p key={`paragraph_${index}`}  id={`paragraph_${index}`}>{projectItem.description}</p>
                  <button key={`btn_${index}`}  id={`btn_${index}`} onClick={(e) =>{if(e !=null && e.target.id !=null) {setVisible(true); setCurrentProjectDisplay(e.target.id.split("_")[1])}}}> VIEW</button>
                </div>
              
            </div>
            </SlideInAnimation> :  
             <div id={`card_${index}`}  className='CardProjectDiv'  style={{ zIndex:  index+1 ,backgroundSize:"cover"}}
              ref={(el) => (cardsRef.current[index] = el)} key={`card_${index}`} 
              
              >         
                <video key={`videoCard_${index}`}  autoPlay loop muted playsInline id={`videoCard_${index}`} className={index !==0  || index === projectsData.length-1? 'CardVideoProject-variant':'CardVideoProject'}  onClick={(e) =>{if(e !=null && e.target.id !=null) {setVisible(true); setCurrentProjectDisplay(e.target.id.split("_")[1])}}}>
                            <source src={projectItem.videoProject} type="video/mp4"/>
                </video> 
                <div key={`diagonalLine_${index}`}  className={index !==0  ? 'diagonalLine1':'diagonalLine2'}></div>
                <div key={`projTitle_${index}`}  className={index !==0 && index !== 1 ? 'TitleProject':'TitleProject-variant'}  id={`projTitle_${index}`} >
                  <h3 key={`h4_${index}`}  id={`h4_${index}`} >{projectItem.title}</h3>
                  <p  key={`paragraph_${index}`} id={`paragraph_${index}`}>{projectItem.description}</p>
                  <button key={`btn_${index}`}  id={`btn_${index}`} onClick={(e) =>{if(e !=null && e.target.id !=null) {setVisible(true); setCurrentProjectDisplay(e.target.id.split("_")[1])}}}> VIEW</button>
                </div>
              
            </div>)
      })
      }

    </div>
  </div>
</>);
};

export default Project;