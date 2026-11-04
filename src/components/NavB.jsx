import { useState } from 'react';
import { MenuIcon2 } from './Icons/MenuIcon2';
import LogoImg from './assets-copy/SteevenWeminLogo.jpg';
import { DropdownIcon1 } from './Icons/DropdownIcon1';

function NavB() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [listOfContentsOpen, setOpenContents] = useState({ mobileMenu: false, dropdownBar: false, mobileDropdown: false });
  const [currentDropdownIndex, setCurrentDropdownIndex] = useState(-1);
  const [classNameOpen, setClassNameOfOpen] = useState('');

  function handleOpenMenuDropdown(e) {
    if (e.target.id !== null) {
      const index = parseInt(e.target.id.toString().split('-')[1]);
      if (index >= 0 && !isNaN(index)) {
        setOpenContents({ mobileMenu: false, dropdownBar: true, mobileDropdown: true });
        setCurrentDropdownIndex(index);
      }
    }
  }

  function handleCloseMenuDropdown() {
    setCurrentDropdownIndex(-1);
    setOpenContents({ ...listOfContentsOpen, mobileMenu: true, dropdownBar: false, mobileDropdown: false });
  }

  function handleOpenMenu() {
    setClassNameOfOpen('open');
    setOpenContents({ ...listOfContentsOpen, mobileMenu: true });
  }

  function closeAll() {
    if (currentDropdownIndex !== -1) setCurrentDropdownIndex(-1);
    setOpenContents({ mobileMenu: false, dropdownBar: false, mobileDropdown: false });
    setClassNameOfOpen('');
  }

  const isMobileMenuOpen = (listOfContentsOpen.mobileMenu && classNameOpen === 'open') || listOfContentsOpen.mobileDropdown;

  return (
    <div id="nav-bar2-div">
      <div id="nav-bar2">
        <ul id="nav-links2">
          <li id="dropli-1" onClick={() => setSideMenuOpen(true)}>
            <a href="#nav-bar2-div" id="link-1"><DropdownIcon1 /> Menu</a>
          </li>
        </ul>

        <ul id="Logo2">
          <li>
            <a href="#nav-bar2-div"><img id="HomeLogo" src={LogoImg} alt="Home logo" width="100" height="80" /></a>
          </li>
        </ul>

        <ul id="nav-center-links">
          <li id="AboutMeSection"><a href="#BioCareer">About me</a></li>
          <li id="ContactSection"><a href="#ContactForm">Contact</a></li>
        </ul>

        <ul id="burger-menu2">
          <li onClick={() => {
            if (!listOfContentsOpen.mobileMenu && !listOfContentsOpen.mobileDropdown) {
              handleOpenMenu();
            } else {
              closeAll();
            }
          }}>
            <MenuIcon2 isOpen={isMobileMenuOpen ? 'open' : ''} />
          </li>
        </ul>

        {listOfContentsOpen.mobileDropdown && (
          <ul id="BackToMobileMenu" onPointerEnter={handleCloseMenuDropdown}>
            <li>
              <button onClick={handleCloseMenuDropdown}>Back to Menu</button>
            </li>
          </ul>
        )}
      </div>

      {/* Full-screen side menu */}
      <div className={`side-menu${sideMenuOpen ? ' open' : ''}`}>
        <button className="side-menu__close" onClick={() => setSideMenuOpen(false)}>Close</button>
        <nav className="side-menu__nav">
          <a href="#CareerGoalDiv" onClick={() => setSideMenuOpen(false)}>Career Goals</a>
          <a href="#TitleExperience" onClick={() => setSideMenuOpen(false)}>Experience</a>
          <a href="#SkillsSection1" onClick={() => setSideMenuOpen(false)}>Skills</a>
          <a href="#ProjectDiv" onClick={() => setSideMenuOpen(false)}>Projects</a>
          <a href="#BioCareer" onClick={() => setSideMenuOpen(false)}>About me</a>
          <a href="#ContactForm" onClick={() => setSideMenuOpen(false)}>Contact</a>
        </nav>
      </div>

      <div className={`divContainer ${classNameOpen}`}>
        <div className={listOfContentsOpen.mobileMenu ? `mobile-content-menu2 ${classNameOpen}` : 'mobile-content-menu2'}>
          <li id="dropli-1" onPointerEnter={handleOpenMenuDropdown}><a href="#nav-bar2-div" id="link-1">MENU <DropdownIcon1 /></a></li>
          <li id="AboutMeSection"><a href="#BioCareer" onPointerEnter={() => setTimeout(closeAll, 500)}>About me</a></li>
          <li id="ContactSection"><a href="#ContactForm" onPointerEnter={() => setTimeout(closeAll, 500)}>Contact</a></li>
        </div>
      </div>

      <div
        className={`blur-curtains2 ${classNameOpen}`}
        onMouseEnter={() => { if (!listOfContentsOpen.searchBar) closeAll(); }}
        onClick={closeAll}
      />
    </div>
  );
}

export default NavB;
