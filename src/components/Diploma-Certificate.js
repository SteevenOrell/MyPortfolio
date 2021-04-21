import React from 'react';
import {Link, BrowserRouter, Switch, Router} from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import transcriptLogo from './assets-copy/TranscriptLogo.JPG';
import degreeLogo from "./assets-copy/DegreeLogo.JPG";


import transcript from './assets-copy/Transcript.JPG';
import diploma from './assets-copy/Diploma.JPG';
import Roll from 'react-reveal/Roll';

class DiplomeCertif extends React.Component {
    constructor(props) {
        super(props);
        this.state = { source:"",  displayMaximizable: false, displayMaximizable2: false}
    }

//Solve update problem 
onHandleClick(name) {

    if(name == "displayMaximizable"){
 this.setState({

    displayMaximizable:true
 })

}
else{
    this.setState({

        displayMaximizable2:true
     })

}
}

 onHandleHide(name) {

    if(name == "displayMaximizable"){

        this.setState({

            displayMaximizable:false
        })

    }

    else{

        this.setState({

            displayMaximizable2:false
        })

    }

}


    componentDidUpdate(){
        
    }
   
    render() { 
        return ( <>

<Roll left>
        <div id="DiplomaCertif">

<div>


<button label="Show" icon="pi pi-external-link" onClick={() => this.onHandleClick('displayMaximizable')} > 
<img src={degreeLogo}    id="imgDegree" />
 </button>
                <Dialog className="Dialogs" header="Associate of Science: Computer Analyst Programmer Program " visible={this.state.displayMaximizable} maximizable modal style={{ width: '100vw' }}  onHide={() => this.onHandleHide('displayMaximizable')} baseZIndex={1000}>
                <img src={diploma}    />
                </Dialog>
                
</div>

<div>
<button label="Show" icon="pi pi-external-link" onClick={() => this.onHandleClick('displayMaximizable2')} > 

<img src={transcriptLogo}   id="imgTranscript"/>
</button>

<Dialog className="Dialogs" header="Transcript" visible={this.state.displayMaximizable2} maximizable modal style={{ width: '100vw' }}  onHide={() => this.onHandleHide('displayMaximizable2')} baseZIndex={1000}>
   <img src={transcript}   id="" />  </Dialog>
</div>


        </div>
        </Roll>
        
         </> );
    }
}
 
export default DiplomeCertif;