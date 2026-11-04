import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
import projectVid2 from './assets-copy/WayandaWebTest.mp4'
import projectBgAlt from './assets-copy/ChatGPT Image May 8, 2026, 04_43_07 PM.png';
import projectMobileVid1 from './assets-copy/Oct-15-2025-1760559225_1722441.mov';
import projectMobileVid2 from './assets-copy/Oct-15-2025-1760559357_7705660.mov';
import { Sidebar } from 'primereact/sidebar';

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const [widthScreen, setWidth] = useState(window.screen.width);
  const [visible, setVisible] = useState(false);
  const [currentProject, setCurrentProjectDisplay] = useState(0);
  const wrapperRef = useRef(null);
  const cardsRef = useRef([]);
  const offsetRef = useRef(null);

  const projectsData = [
    {
      title: 'Wayanda Website',
      description: 'This website connects skilled, compassionate barbers to nursing homes across Ontario to offer in-home haircuts to elderly residents. Built with React, Tailwind.css, Email.js, Prime React.',
      link: 'https://github.com/SteevenOrell/WayandaCC',
      imgArray: [wcc1Img, wccImg2, wccImg3, wccImg4],
      videoProject: widthScreen >= 550 ? projectVid2 : projectMobileVid2,
    },
    {
      title: 'Ecommerce App',
      description: 'A CRUD ECOM APP... Features includes view products list (With pagination), search product, view product details, sign in to account, edit Profile account etc...',
      link: 'https://github.com/SteevenOrell/PracticeEcommerceWebsite',
      imgArray: [ecomWebsite, ecomWebsite2, ecomWebsite3, ecomWebsite4],
      videoProject: widthScreen >= 550 ? projectVid1 : projectMobileVid1,
    },
    {
      title: 'Chat Application',
      description: 'A realtime chat application allowing persons to chat. Not designed for mobile. Technologies used : Socket.io, Express, Node.js, MongoDB, Html5, Jquery',
      link: 'https://github.com/SteevenOrell/chat-app-assignment',
      imgArray: [chatAppImg],
      bgImage: projectBgAlt,
    },
    {
      title: 'Pocket Meal App',
      description: "A mobile application allowing user to communicate with persons who need healthy food instead of wasting it. Food list are dynamically shown by person near user's location.",
      link: 'https://github.com/SteevenOrell/CapstoneProject-PocketMealSystem',
      imgArray: [capstoneImg],
      bgImage: projectBgAlt,
    },
  ];

  useEffect(() => {
    function handleResize() {
      setWidth(window.screen.width);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    const stickySpace = offsetRef.current;
    if (!cards.length || !stickySpace) return;

    const animation = gsap.timeline();

    function initCards() {
      animation.clear();
      const cardHeight = cards[0].offsetHeight;
      cards.forEach((card, index) => {
        if (index > 0) {
          gsap.set(card, { y: index * cardHeight });
          animation.to(card, { y: 0, duration: index * 0.5, ease: 'none' }, 0);
        }
      });
    }

    initCards();

    const trigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'top top',
      pin: true,
      end: () => `+=${cards.length * cards[0].offsetHeight + stickySpace.offsetHeight}`,
      scrub: true,
      animation,
      invalidateOnRefresh: true,
    });

    ScrollTrigger.addEventListener('refreshInit', initCards);

    return () => {
      trigger.kill();
      ScrollTrigger.removeEventListener('refreshInit', initCards);
    };
  }, []);

  return (
    <>
      <Sidebar visible={visible} onHide={() => setVisible(false)} className='Sidebar' fullScreen>
        <h4>{projectsData[currentProject].title}</h4>
        <p>{projectsData[currentProject].description}</p>
        <a href={projectsData[currentProject].link} target='_blank' rel="noreferrer">Github link</a>
        <div className="swiper mySwiper mb-10 py-10">
          <div className="swiper-wrapper">
            {projectsData[currentProject].imgArray.map((img, index) => (
              <div className="swiper-slide" key={`swiper_${index}`}>
                <div className="w-full-h-full-img">
                  <img
                    src={img}
                    alt=''
                    className="w-full h-full object-cover mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Sidebar>

      <div id="ProjectDiv">
        <div className='titleInTheMiddle' id='titleOnSide'>
          <h3>Latest Projects</h3>
        </div>

        <div className="stack-wrapper" ref={wrapperRef}>
          <div className="stack-offset" ref={offsetRef}></div>
          <div className="portfolio-stack">
            {projectsData.map((project, index) => (
              <div
                className="stack-item"
                key={`stack_${index}`}
                style={{ zIndex: index + 1 }}
                ref={el => (cardsRef.current[index] = el)}
              >
                <div
                  className="portfolio-stack__inner"
                  onClick={() => { setVisible(true); setCurrentProjectDisplay(index); }}
                >
                  {project.bgImage
                    ? <img src={project.bgImage} alt="" className="stack-card-video" />
                    : <video autoPlay loop muted playsInline className="stack-card-video">
                        <source src={project.videoProject} type="video/mp4" />
                      </video>
                  }
                  <div className="stack-card-gradient"></div>
                  <div className="portfolio-stack__descr">
                    <span className="portfolio-stack__number">{String(index + 1).padStart(2, '0')}</span>
                    <h4 className="portfolio-stack__title">{project.title}</h4>
                    <p className="portfolio-stack__text">{project.description}</p>
                    <button
                      className="portfolio-stack__btn"
                      onClick={e => { e.stopPropagation(); setVisible(true); setCurrentProjectDisplay(index); }}
                    >
                      VIEW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
