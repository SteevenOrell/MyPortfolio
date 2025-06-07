import {useState} from 'react';

import { MenuIcon2 } from './Icons/MenuIcon2';
import LogoImg from './assets-copy/SteevenWeminLogo.jpg';
import { DropdownIcon1 } from './Icons/DropdownIcon1';

function NavB(){

    const [listOfContentsOpen,setOpenContents] = useState({"mobileMenu":false,"dropdownBar":false,"mobileDropdown":false });
    const [currentDropdownIndex,setCurrentDropdownIndex] = useState(-1)
    const [classNameOpen,setClassNameOfOpen] = useState("");

    function handleOpenMenuDropdown(e){

        let index = 0;
        //console.log(e.target.id);
        if(e.target.id !=null){
          index = parseInt(e.target.id.toString().split("-")[1]);
          //console.log(index)
          if(index >=0 && !isNaN(index)){

          
            
            setOpenContents({"mobileMenu":false,"dropdownBar":true, "mobileDropdown":true});
            setCurrentDropdownIndex(index);
          }

          //console.log(listOfDropdownClass)
        }        
    }
    function handleCloseMenuDropdown(){

        setCurrentDropdownIndex(-1);
        setOpenContents({...listOfContentsOpen,"mobileMenu":true, "dropdownBar":false,"mobileDropdown":false})

    }
    function handleOpenDropdown(e){

        let index = 0;
        //console.log(e.target.id);
        if(e.target.id !=null){
          index = parseInt(e.target.id.toString().split("-")[1]);
          //console.log(index)
          if(index >=0 && !isNaN(index)){


            setClassNameOfOpen("open");
            setOpenContents({...listOfContentsOpen,"dropdownBar":true});
            setCurrentDropdownIndex(index);
          }

          //console.log(listOfDropdownClass)
        }
            
    }
    function handleCloseDropdown(){

        if(currentDropdownIndex != -1){
            setCurrentDropdownIndex(-1);
        }
        setOpenContents({...listOfContentsOpen,"dropdownBar":false});
        setClassNameOfOpen("");
    }

    function handleOpenMenu(){
        setClassNameOfOpen("open");
        setOpenContents({...listOfContentsOpen,"mobileMenu":true})
    }
    
    function handleCloseMenu(){
        if(currentDropdownIndex != -1){
            setCurrentDropdownIndex(-1);
        }
        setOpenContents({...listOfContentsOpen,"mobileMenu":false, "dropdownBar":false})
        setClassNameOfOpen("");
    }
    function closeAll(){
        // console.log("Close all")
        if(currentDropdownIndex != -1){
            setCurrentDropdownIndex(-1);
        }
        setOpenContents({"mobileMenu":false, "dropdownBar":false,"mobileDropdown":false})
        setClassNameOfOpen("");
    }
    return (
            <div id='nav-bar2-div'>
            <div id="nav-bar2" style={classNameOpen==="open" ? {backgroundColor:"black"} : {}}>
                
                {
                   listOfContentsOpen["mobileDropdown"] ?
                  ( <>


                  <ul id="burger-menu2">
                      <li onClick={()=>{if(!listOfContentsOpen.mobileMenu && !listOfContentsOpen["mobileDropdown"]){return handleOpenMenu()} closeAll()}}>
                          <MenuIcon2 isOpen={listOfContentsOpen.mobileMenu && classNameOpen === "open" || listOfContentsOpen["mobileDropdown"] ? "open" : ""} />
                      </li>
                  </ul>
                  <ul id='Logo2'>
                      <li>
                          { listOfContentsOpen.mobileMenu|| listOfContentsOpen["mobileDropdown"] ?"" :<a href='#'> <img id='HomeLogo' src={LogoImg} alt='Home logo' width="100" height="80" />  </a>}
                      </li>
                  </ul>
                </>)
                  :

                  ( <>
                    <ul id='Logo2'>
                      <li>
                          {  listOfContentsOpen["mobileDropdown"] ?"" :<a href='#'> <img id='HomeLogo' src={LogoImg} alt='Home logo' width="100" height="80" />  </a>}
                      </li>
                  </ul>

                  <ul id="burger-menu2">
                      <li onClick={()=>{if(!listOfContentsOpen.mobileMenu && !listOfContentsOpen["mobileDropdown"]){return handleOpenMenu()} closeAll()}}>
                          <MenuIcon2 isOpen={listOfContentsOpen.mobileMenu && classNameOpen === "open" || listOfContentsOpen["mobileDropdown"] ? "open" : ""} />
                      </li>
                  </ul>
                </>
                )
                }


                <ul id="nav-links2">
                    <li id="dropli-1" onMouseEnter={(e)=>{handleOpenDropdown(e)}} ><a href='##' id="link-1">My Portfolio's Details <DropdownIcon1/> </a></li>  
                    <li id="AboutMeSection" ><a href='#BioCareer' >About me</a></li>
                    <li id="ContactSection" ><a href='#ContactForm' >Contact</a></li>
                    
                    {/* onMouseEnter={handleCloseDropdown} */}

                </ul>


                {listOfContentsOpen["mobileDropdown"] ? 
                <ul id="BackToMobileMenu" onPointerEnter={handleCloseMenuDropdown}>
                    <li>
                         <button><a href='' >Back to Menu </a></button>
                    </li>
                </ul>:""}
            </div>
            <div className= {`divContainer ${classNameOpen}`}>
                
                    <div className={ listOfContentsOpen.dropdownBar && currentDropdownIndex == 1 ? `dropdown-content ${classNameOpen}`:"dropdown-content"}>
                            <ul>
                                <li id="CareerSection" onPointerEnter={()=>{if(listOfContentsOpen.dropdownBar && currentDropdownIndex == 1 && listOfContentsOpen["mobileDropdown"]){return setTimeout(closeAll,500)}}}>
                                    <a href='#CareerGoalDiv' >Career Goals</a></li>

                                <li id="ExperienceSection" onPointerEnter={()=>{if(listOfContentsOpen.dropdownBar && currentDropdownIndex == 1 && listOfContentsOpen["mobileDropdown"]){return setTimeout(closeAll,500)}}}
                                    ><a href='#TitleExperience'>Experience</a></li>

                                <li id='SkillsSection' onPointerEnter={()=>{if(listOfContentsOpen.dropdownBar && currentDropdownIndex == 1 && listOfContentsOpen["mobileDropdown"]){return setTimeout(closeAll,500)}}}
                                    ><a href='#SkillsSection1'>Skills</a></li>

                                <li id="ProjectsSection" onPointerEnter={()=>{if(listOfContentsOpen.dropdownBar && currentDropdownIndex == 1 && listOfContentsOpen["mobileDropdown"]){return setTimeout(closeAll,500)}}}
                                    ><a href='#ProjectDiv'>Projects</a></li>
                                

                            </ul>

                    </div>

               

                <div className={ listOfContentsOpen.mobileMenu ? `mobile-content-menu2 ${classNameOpen}` : 'mobile-content-menu2'}>

                    <li id="dropli-1" onPointerEnter={(e)=>{handleOpenMenuDropdown(e)}} ><a href='##' id="link-1">My Portfolio's Details <DropdownIcon1/> </a></li>
                    <li id="AboutMeSection"><a href='#BioCareer' onPointerEnter={()=>setTimeout(closeAll,500)} >About me</a></li>
                    <li id="ContactSection" ><a href='#ContactForm' onPointerEnter={()=>setTimeout(closeAll,500)}>Contact</a></li>
                </div>
            </div>
            <div className={`blur-curtains2 ${classNameOpen}`} onMouseEnter={()=>{if(!listOfContentsOpen.searchBar){closeAll()}}} onClick={closeAll}></div>
        
            </div>
        )
}

export default NavB;