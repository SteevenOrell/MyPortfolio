import React, { useRef, useState } from 'react';

import Spline from '@splinetool/react-spline';
import FooterSectionMP4 from "./assets-copy/lightning-bulb.mp4";
import LogoImg from './assets-copy/SteevenWeminLogo.jpg';
import emailjs from '@emailjs/browser';
import { Toast } from 'primereact/toast';

function Footer()  {
    const form = useRef();
    const toast = useRef(null);
    const[styleCSS,setStyleCSS] = useState({})

    function sendEmail(e){
    e.preventDefault();
        console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID,)
        emailjs
        .sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            {
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
            }
        )
        .then(
            (result) => {
            //console.log('SUCCESS!', result.text);
            toast.current.show({severity:'success', summary: '', detail:'Your message has been sent', life: 3000});

            form.current.reset(); // Optionally reset the form
            },
            (error) => {
            //console.log('FAILED...', error.text);

            toast.current.show({severity:'error', summary: '', detail:'Failed to send message', life: 3000});

            }
        );

    //  this.showSuccess()
    
    }
    


       
        return (     
        <>
            <Toast ref={toast} id='ToastNotif' style={styleCSS}/>
            <div id='ContactFormDiv'>
                <div id="animationCoverContactForm"> 
                    <video autoPlay loop muted playsInline>
                            <source src={FooterSectionMP4} type="video/mp4"/>
                </video></div>
                {/* <Spline scene="https://prod.spline.design/Sm5vOdV9GRCoaAQN/scene.splinecode" />  */}
                <form id='ContactForm'ref={form} onSubmit={sendEmail} method='POST'>
                    <h3><i>CONTACT ME</i></h3>
                    <div>
                        <label className='labelContactForm'> Name</label><br/>
                        <input text='name' placeholder='Your name' name="name" required/> <br/>
                    </div>
                    <div>
                        <label className='labelContactForm'> Email</label><br/>
                        <input text='email' placeholder='Let connect via email' name='email'  required/> <br/>
                    </div>
                    <div>
                        <label className='labelContactForm'> Your Message</label><br/>
                        <textarea placeholder='Message me' rows="7" cols="100" name='message' required id='message'/> <br/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
           


  <footer id="Footer1" class="w-full">
            <div className='LogoFooterDiv'>
                <li> <a href='#'><img id='HomeLogo' src={LogoImg} alt='Home logo' width="150" height="150" /></a></li>
                

            </div>
            <div className='OtherLinks'>
            <div className='OtherFooterDiv'>
                <ul>
                    <h5> Overview</h5>
                    <li> <a href='#BioCareer'><p>About me</p></a></li>
                    <li> <a href='#CareerGoalDiv'><p>Career Goals</p></a></li>
                    <li> <a href='#ContactForm'><p>Contact</p></a></li>
                </ul>
            </div>
            <div className='OtherFooterDiv'>
                <ul>
                    <h5>  Technical Skills </h5>
                    <li> <a href='#TitleExperience'><p>Work </p></a></li>
                    <li> <a href='#SkillsSection1'><p>Skills</p></a></li>
                    <li> <a href='#ProjectDiv'><p>Projects</p></a></li>
                    
                </ul>
            </div>
                <div className='OtherFooterDiv'>
                <ul>
                    <h5> Social network</h5>
                    <li> <a href='https://www.linkedin.com/in/orell-wemin-8519a5179'><p>LinkedIn</p></a></li>
                    <li> <a href='https://github.com/SteevenOrell/'><p>Github</p></a></li>
                    <li> <a href='https://www.freelancer.com/u/JuniOrell'><p>Freelancer</p></a></li>
                </ul>
            </div>
            </div>
    </footer>
    
     <div id='AllRightReserved'>
        <hr/>
        <p>© {new Date().getFullYear()} all right reserved to Steeven Orell WEMIN</p>
    </div>   
        
        </>);
    
}
 
export default Footer;