import React, {useState,useEffect } from 'react';
import { Sidebar } from 'primereact/sidebar';
import Swiper from 'swiper';


import ecomWebsite from './assets-copy/EcomWebsite.png';
import ecomWebsite2 from './assets-copy/EcomWebsite2.png';
import ecomWebsite3 from './assets-copy/EcomWebsite3.png';
import ecomWebsite4 from './assets-copy/EcomWebsite4.png';
import runningTrackImg from './assets-copy/RunningTrackAppImages.jpg';
import runningTrackImg2 from './assets-copy/RunningTrackApp2.JPG';
import runningTrackImg3 from './assets-copy/RunningTrackApp3.JPG';
import runningTrackImg4 from './assets-copy/RunningTrackApp4.JPG';
import chatAppImg from './assets-copy/Capture-ChatApp.JPG';
import capstoneImg from './assets-copy/CapstoneImages.jpg';
import { FadeInAnimation } from './FadeInAnimation';



const Project = () => {
  const [visible, setVisible] = useState(false);
  const [currentProject,setCurrentProjectDisplay] = useState(0);
  
  const features = [
    {
      title: 'Ecommerce Website Practice',
      description: 'A CRUD ECOM APP with API. Features includes view products list (With pagination), search product, view product details, sign in to account, edit Profile account etc...',
      link:"https://github.com/SteevenOrell/PracticeEcommerceWebsite",
      imgArray: [ecomWebsite,ecomWebsite2,ecomWebsite3,ecomWebsite4]
    },
    {
      title: 'Chat Application',
      description: 'A realtime chat application allowing persons to chat. Not designed for mobile. Technologies used : Socket.io, Express, Node.js, MongoDB, Html5, Jquery',
      link:"https://github.com/SteevenOrell/chat-app-assignment",
      imgArray: [chatAppImg]
    },
    {
      title: 'Running Track Application',
      description: 'A realtime mobile application allowing user to track distances run through, saved and shared. Technologies used : Java,Android Studio, Google Api,Sqlite',
      link:"https://github.com/SteevenOrell/Prototype_2_Group_12-final-version-mobileapp",
      imgArray: [runningTrackImg, runningTrackImg2,runningTrackImg3,runningTrackImg4]
    },
    {
      title: 'Pocket Meal Application',
      description: 'A mobile application allowing user to communicate with persons who need healthy food instead of wasting it. Food list are dynamically shown by person near user\'s location.',
      link:"https://github.com/SteevenOrell/CapstoneProject-PocketMealSystem",
      imgArray: [capstoneImg]
    },
  ];


   useEffect(() => {
    // Initialize Swiper when the component mounts
    new Swiper('.mySwiper', {
      pagination: {
        el: '.swiper-pagination', // Use 'el' instead of direct class name
        clickable: true,
      },
      slidesPerView: 2,
      centeredSlides: true,
      loop: true,
      spaceBetween: 30,
      slideToClickedSlide: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []); // The empty dependency array
  return (<>
    <Sidebar visible={visible} onHide={() => setVisible(false)} className='Sidebar' fullScreen>
          <h3>{features[currentProject].title}</h3>
          <p>
             {features[currentProject].description}
          </p>
          <div className="swiper mySwiper mb-10 py-10">
            <div className="swiper-wrapper">
          {
            
            features[currentProject].imgArray.map((img)=>{
              return(  
          
        
                  <div className="swiper-slide">
                    <div className="w-full h-full max-h-[456px]">
                      <img
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


    <section className="py-24" id='ProjectDiv'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <h3 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
              Latest Projects
            </h3>
          </div>
    
        </div>
          
        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {features.map((feature, index) => (
            <FadeInAnimation>{
            <div
              key={index}
              className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600"
            >
              <div className='ProjectDivInfo'> 
                <h5 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                  {feature.title}
                </h5>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                  {feature.description}
                </p>
              </div>
              <div className='ProjectDivLinks'> 
                <a href={feature.link}><i>VIEW PROJECT</i></a> <br/>
                <button id={`img_${index}`} onClick={(e) =>{setVisible(true); setCurrentProjectDisplay(e.target.id.split("_")[1])}}> PREVIEW</button>
              </div>
            </div>}
            </FadeInAnimation>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};
export default Project;
