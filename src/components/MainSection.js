import React from 'react';
import './main.css';
import imageMainMenu from './assets-copy/giphy2.gif';
import imMain from './assets-copy/mainIm.gif'

class MainSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dynamicIm: imageMainMenu  }
    }

handleImChange(){
if(window.innerWidth <= 640){

    this.setState({dynamicIm: imMain})
}

var elem = document.getElementById("divOne");

var node = document.createElement("H1");                 
var textnode = document.createTextNode("\"Welcome to my portfolio\"");         
node.appendChild(textnode); 

var node2 = document.createElement("H1");                 
var textnode2 = document.createTextNode("Steeven Orell");         
var nodeBr = document.createElement("BR"); 
var nodeSpan = document.createElement("span")
var textnode3 = document.createTextNode("WEMIN")
nodeSpan.appendChild(textnode3)

var nodeP = document.createElement("p")
var textnode4 = document.createTextNode("Software Developer")
nodeP.appendChild(textnode4)

node2.appendChild(textnode2); 
node2.appendChild(nodeBr)
node2.appendChild(nodeSpan)
node2.appendChild(nodeP)





setInterval(()=>{ 

    
    if(!(elem.innerHTML).includes("Welcome") ){

        elem.innerHTML=""
        elem.className="tracking-in-expand-fwd-bottom"
        elem.appendChild(node)
    
    }
    else{

        elem.innerHTML=""
        elem.className = "tracking-in-contract"
        elem.appendChild(node2)
    }
       
    
  
}, 4000);
}

componentDidMount(){
this.handleImChange()

}

    
    render() { 
        
        return ( <>
        <div id="MainDiv" >
            <div id="divOne" className = "tracking-in-contract"> <h1>Steeven Orell <br/> <span >  WEMIN</span></h1> 
            <p> Software Developer</p>
            </div>
        <div >
           

<img id="imageMainMenu"  src = {this.state.dynamicIm} alt="main menu picture"/>  
</div>
</div>
</>
        
       );
    }
}
 
export default MainSection;