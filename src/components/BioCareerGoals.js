import { FadeInAnimation } from './FadeInAnimation';

function BioCareerGoals()  {

        return (<>
        <div  id="BioCareer">


            <div className="BioText">
            
                <h3><i> <FadeInAnimation> {"About me"} </FadeInAnimation> </i></h3>
           
            </div>
            
        <div className="containerBio" >

        
        <FadeInAnimation>
            {
                <p id="bioTextParagraph"> 
                      A Problem solver, quick learner, teamwork person and self-motivated software developer with <b> three years of experience </b> working, providing software solutions to clients for Business Process Automation, in addition of building web and mobile applications. A curious learner willing to provide excellent solutions to exceed requirements assigned. Looking to work individually or with a team, collecting applications’ requirements, designing mobile or web, software applications, developing, implementing, and testing applications’ codes.   
                
                    <br></br>
                </p>
            }
            </FadeInAnimation>
        </div>    
        </div>
           
       </> );
    }

 
export default BioCareerGoals;