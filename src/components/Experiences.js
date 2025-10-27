import { FadeInAnimation } from "./FadeInAnimation";

function Experiences(){
return (
<>
    <div id="TitleExperience">
        <div>
        <h2>WORK</h2>
        <h4>EXPERIENCE</h4>
        </div>


    </div>

  <FadeInAnimation>               
 <div id="HeroDiv2">
        
        <div className="CardExperience">
            <h4>Software Developer</h4>
            <h5>Current - May 2022</h5>
            <p><b>Main Technologies: ASP.NET, C#, JavaScript, Azure AI, postgreSQL </b>
                <br/>
                 Creating new solutions or applications based on BRD and clients need to automate their business process. <br/>
                 Solving and fixing issues with the existing solutions.<br/>
                 Performing testing and deploying codes.<br/>
                 Peer code review<br/>
                Assigning tasks to Developers.<br/></p>
        </div>
        <div className="CardExperience">
            <h4>Jr Dev Internship</h4>
            <h5>Oct 2021 - Jul 2021</h5>
            <p><b>Main Technologies: PHP, Laravel, MySql </b>
                <br/>Implementing new features to existing application.<br/>
                Performing testing and deploying codes.<br/>
                Creating documentations and guides for applications helping customers to understand and use products.<br/>
                Follow Scrum methodology using Azure DevOps.<br/>
                Reporting production issues
            </p>    
        </div>          
        
    </div>
    </FadeInAnimation>
</>)
}


export default Experiences;