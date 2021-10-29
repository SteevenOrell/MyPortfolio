import React from 'react';
import  './main.css';
import TorontoCity from './assets-copy/buildings-near-body-of-water-at-night-1519088.jpg'
import ContactMeIm from './assets-copy/ContactMeImage.jpg';
import ExperienceImage from './assets-copy/ExperienceImage.jpg';
import LocationIm from './assets-copy/LocationPhoto.jpg';
import EmailPhoto from './assets-copy/Emailphoto.jpg';
import GitHubIm from './assets-copy/GitHubLogo.png';
import LinkedIn from './assets-copy/Linkedin-icon.png';
import Freelancer from './assets-copy/FreelancerLogo.png';
import SWLogo from './assets-copy/SteevenWeminLogo.jpg'
import Axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { Toast } from 'primereact/toast';
import Roll from 'react-reveal/Roll';
import mainIm2 from './assets-copy/mainIm2.gif'
class footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
        
    }
sendEmail(e){
    e.preventDefault();
    var name = document.getElementById("Name").value
    var email = document.getElementById("Email").value
    var message = document.getElementById("Message").value

Axios.post('https://portfolio-backend-sw.herokuapp.com/sendMessage',{"Name" : name, "Email" : email, "Message" : message}).then((res)=>{

    console.log(res.data)
})


document.getElementById("Name").value = 
 document.getElementById("Email").value=  
 document.getElementById("Message").value = "";

 this.showSuccess()
   
}

showSuccess() {
    this.toast.show({severity:'success', summary: 'Successfully Sent', detail:'Your message has been sent', life: 3000});
  
}

    render() { 

       
        return ( <>
        
        <div id="torontoCity" style={{ backgroundImage: `url(${TorontoCity})`, backgroundAttachment: "fixed"}}></div>
        <div id="experience">
      <img src={ExperienceImage} alt="Experience"/>
      <p> 
       <b>July 2021 - October 2021  Software Developer </b><br></br>
       Software Developer Intern, Toronto, ON<br></br>
Create applications for employees and customers<br></br>
• Design’s solutions, writes code, performs unit testing, develops appropriate artefacts /
documentation, and facilitates final delivery.<br></br>
• Assist with creating documentation for applications and systems<br></br>
• Build reports by leveraging data within systems <br></br>
• Supports production issues, includes independently completing root-cause analysis and
diagnosis. <br></br>
• Works independently on a range of complex tasks, which may include unique situations. <br></br>
<br></br>
     	<b>May 2020 - October 2021  Software Developer </b><br></br>
Freelancer, Toronto, ON<br></br>
Providing online services for clients willing to build:<br></br>
•	Web applications<br></br>
•	Mobile applications<br></br>
•	Desktop applications<br></br>

<br></br>
 	<b>Oct 2018 - Oct 2019	Fundraising Representative </b><br></br>
Envision fundraising, Toronto, ON<br></br>
•	Register people willing to give money to children with disabilities<br></br>
•	Focused on other volunteer positions for Food distribution to homeless persons<br></br>
•	Teaching French to student<br></br>
•	Teaching mathematics to student, helping orphaned children
 </p>
 <img src={mainIm2} id="mainImage2"/>
        </div>

        <div className="Footer">
        <img src={ContactMeIm} alt="Contact" id="ContactMeImage"/><br></br><br></br>
        
        <a href="mailto:steevyorelljunior@gmail.com"><p><img src={EmailPhoto} alt="Email" id="EmailPhoto" className="logoFooter"/>  steevyorelljunior@gmail.com</p> </a> 
         
        <p> <img src={LocationIm} alt="Location" id="LocationPhoto" className="logoFooter"/> Mutual Street, ON, Toronto. </p>
        <br></br>
        
        <form onSubmit={ (e)=>{this.sendEmail(e)}} method="POST" id="form">

<input type="text"  placeholder="Name" id="Name" className="inputClass" required/><br></br>


<input type="email"  placeholder="Email" id="Email" required className="inputClass"/><br></br>

<textarea  placeholder="Message" id="Message" className="inputClass" required> </textarea><br></br>

<input type='submit' id="SubmitMessage" value="Send Message"/>

        </form>


        <Toast ref={(el) => this.toast = el} />

        <hr></hr>

<div id="copyright"><p> Copyright all right reserved to Steeven Orell WEMIN    

<div id="logoSocialMedia"> 
<a href="https://www.linkedin.com/in/steeven-wemin-8519a5179/"><img src={LinkedIn} className="logoCopyright1" /></a>
<a href="https://github.com/SteevenOrell?tab=repositories"><img src={GitHubIm}  className="logoCopyright2"/></a>
<a href="https://www.freelancer.com/u/JuniOrell"><img src={Freelancer} className="logoCopyright2"/></a>
</div>
</p> 
   </div>
        </div>
        </> );
    }
}
 
export default footer;
