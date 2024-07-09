import "./Navbar.css";
import { useState, useEffect } from "react";
import Logo from "./svg/Logo";
import Menu from "./svg/Menu";
import Close from "./svg/Close";
import Back from "./svg/Back";
import LogoAzul from "./svg/LogoAzul";


const NavBarES = () => {
  const [activeLink, setActiveLink] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setShowMenu(false);
  };

//
 //useEffect(() => {
//    if (showMenu) {
//      document.body.classList.add("no-scroll");
//    } else {
//      document.body.classList.remove("no-scroll");
//    }
//  }, [showMenu]);

const handleLanguageSwitch = (lang) => {
  const currentPath = window.location.pathname;
  if (lang === 'EN') {
    const newPath = currentPath.startsWith('/es') ? currentPath.substring(3) : currentPath;
    window.location.href = newPath;
  }
};

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleBackClick = (event) => {
    event.preventDefault(); 
    window.history.back(); 
  };

  return (
    <nav className="nav">
      <div className="nav-content">
        <a className="nav-back" href="#" onClick={handleBackClick}>
          <Back />
        </a>
        <a className="nav-logo-cel" href="/main">
          <img className="isologo" src="/isologo.png" alt="isologo" />
        </a>
        <a className="nav-logo" id="main" href="/main">
          {showMenu ? <LogoAzul /> : <Logo />}
        </a>
        <div className="nav-menu">
          <button className="menu" onClick={toggleMenu}>
            {showMenu ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          <div className="selector">
          <a href="/es/projects" onClick={() => handleLinkClick('link1')} className={activeLink === 'link1' ? 'active' : ''}>OBRAS,</a>
          <a href="/es/info" onClick={() => handleLinkClick('link2')} className={activeLink === 'link2' ? 'active' : ''}>INFO,</a>
          <a href="/es/contact" onClick={() => handleLinkClick('link3')} className={activeLink === 'link3' ? 'active' : ''}>CONTACTO,</a>
          </div>
          <div className="language">
            <a className="current" href="">ES</a>/<a href="#" onClick={() => handleLanguageSwitch('EN')}>EN</a>
          </div>

        </div>
      )}
    </nav>
  );
};

export default NavBarES;
