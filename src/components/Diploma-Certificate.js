import React from 'react';
import {Link, BrowserRouter, Switch, Router} from 'react-router-dom';
import transcriptLogo from './assets-copy/TranscriptLogo.JPG';
import degreeLogo from "./assets-copy/DegreeLogo.JPG";
import transcript from './assets-copy/Transcript.JPG';
import diploma from './assets-copy/Diploma.JPG';
import Close from "./assets-copy/Close.png"
class DiplomeCertif extends React.Component {
    constructor(props) {
        super(props);
        this.state = { source:"" }
    }

//Solve update problem 

    onPreview(e){
var imgModal = document.getElementById("modalImageDiv");
var Close = document.getElementById("Close");
Close.style.position = "absolute";
Close.style.top=0 ;
Close.style.right= 0;
Close.style.margin = 0;

Close.style.height= "8%";
Close.style.width= "8%";
var reactEle;

console.log(imgModal.innerHTML);
if(e.target.id == "imgDegree"){
reactEle = <>{diploma}</>
}
else{
     reactEle = <>{transcript}</>
}

 this.setState({source: reactEle.props["children"]});

imgModal.style.width= "100%" ;
imgModal.style.height = "100%";
imgModal.style.display = "block";

    }

    onClose(){
        var imgModal = document.getElementById("modalImageDiv");
        imgModal.style.display="none";
        

    }
   
    render() { 
        return ( <>
        <div id="DiplomaCertif">

<div>
<button> 
<img src={degreeLogo}   onClick={(e)=>{this.onPreview(e)}} id="imgDegree" />

</button>
</div>

<div>
<button  > 

<img src={transcriptLogo}  onClick={(e)=>{this.onPreview(e)}} id="imgTranscript"/>
</button>
</div>

<div id="modalImageDiv">
 <img  src={this.state.source}  />
 <button id="Close" onClick={()=>{this.onClose()}}>CLOSE</button>
</div>
        </div>
        
        
         </> );
    }
}
 
export default DiplomeCertif;