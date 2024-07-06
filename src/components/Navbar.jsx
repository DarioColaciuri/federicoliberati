import "./Navbar.css";
import { useState } from "react";
import Logo from "./svg/Logo";
import Menu from "./svg/Menu";
import Close from "./svg/Close";
import Back from "./svg/Back";


const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = (id) => {
    setActiveLink(id);
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
        <a className="nav-logo-cel"  href="/main">
          <img className="isologo" src="/isologo.png" alt="isologo" />
        </a>
        <a className="nav-logo" id="main" href="/main">
          <Logo />
        </a>
        <div className="nav-menu">
          <button className="menu" onClick={toggleMenu}>
            {showMenu ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          <a href="/projects" onClick={() => handleLinkClick('link1')} className={activeLink === 'link1' ? 'active' : ''}>OBRAS,</a>
          <a href="/info" onClick={() => handleLinkClick('link2')} className={activeLink === 'link2' ? 'active' : ''}>INFO,</a>
          <a href="/contact" onClick={() => handleLinkClick('link3')} className={activeLink === 'link3' ? 'active' : ''}>CONTACTO,</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
