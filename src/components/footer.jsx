import React, { useRef, useState } from 'react';


import FooterSectionMP4 from "./assets-copy/lightning-bulb.mp4";
import LogoImg from './assets-copy/SteevenWeminLogo.jpg';
import emailjs from '@emailjs/browser';
import { Toast } from 'primereact/toast';


function Footer()  {
    const form = useRef();
    const toast = useRef(null);
    const [sending, setSending] = useState(false);

    function sendEmail(e){
        e.preventDefault();
        if (sending) return;

        // Honeypot: real visitors never see or fill this field, bots usually do.
        if (form.current.elements.website.value) {
            form.current.reset();
            return;
        }

        setSending(true);
        emailjs
        .sendForm(
            import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
            import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            {
            publicKey: import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY,
            // Refuse to send from headless browsers (automated bots).
            blockHeadless: true,
            // Allow at most one message every 30 seconds from the same browser.
            limitRate: { id: 'contact-form', throttle: 30000 },
            }
        )
        .then(
            () => {
            toast.current.show({severity:'success', summary: '', detail:'Your message has been sent', life: 3000});
            form.current.reset();
            },
            (error) => {
            const detail = error && error.status === 429
                ? 'Please wait a moment before sending another message'
                : 'Failed to send message';
            toast.current.show({severity:'error', summary: '', detail, life: 3000});
            }
        )
        .finally(() => setSending(false));
    }
    


       
        return (     
        <>
            <Toast ref={toast} id='ToastNotif' />
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
                        <input type='text' placeholder='Your name' name="name" required maxLength={100} autoComplete='name'/> <br/>
                    </div>
                    <div>
                        <label className='labelContactForm'> Email</label><br/>
                        <input type='email' placeholder='Let connect via email' name='email' required maxLength={254} autoComplete='email'/> <br/>
                    </div>
                    <div>
                        <label className='labelContactForm'> Your Message</label><br/>
                        <textarea placeholder='Message me' rows="7" cols="100" name='message' required minLength={10} maxLength={5000} id='message'/> <br/>
                    </div>
                    {/* Honeypot field, hidden from people and screen readers */}
                    <div aria-hidden="true" style={{position:'absolute', left:'-10000px', width:'1px', height:'1px', overflow:'hidden'}}>
                        <label>Website<input type='text' name='website' tabIndex={-1} autoComplete='off' defaultValue=''/></label>
                    </div>
                    <button type='submit' disabled={sending}>{sending ? 'Sending...' : 'Submit'}</button>
                </form>
               
            </div>
           


  <footer id="Footer1" className="w-full">
            <div className='LogoFooterDiv'>
                <li> <a href='#Footer1'><img id='HomeLogo' src={LogoImg} alt='Home logo' width="150" height="150" /></a></li>
                

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
                    <h5> Social Network</h5>
                    <li> <a href='https://www.linkedin.com/in/orell-wemin-8519a5179' target='_blank' rel="noreferrer"><p>LinkedIn</p></a></li>
                    <li> <a href='https://github.com/SteevenOrell/' target='_blank' rel="noreferrer"><p>Github</p></a></li>
                    <li> <a href='https://www.freelancer.com/u/JuniOrell' target='_blank' rel="noreferrer"><p>Freelancer</p></a></li>
                </ul>
            </div>
            </div>
    </footer>
    
     <div id='AllRightReserved'>
        <hr/>
        <p>© {new Date().getFullYear()} all right reserved to Orell WEMIN</p>
    </div>   
        
        </>);
    
}
 
export default Footer;