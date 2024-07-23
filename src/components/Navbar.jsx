import "./Navbar.css";
import { useState, useEffect } from "react";
import Logo from "./svg/Logo";
import Menu from "./svg/Menu";
import Close from "./svg/Close";
import Back from "./svg/Back";
import LogoAzul from "./svg/LogoAzul";
import Isologo from "./svg/Isologo";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showBack, setShowBack] = useState(true);

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("/projects")) {
      setActiveLink("link1");
    } else if (path.includes("/info")) {
      setActiveLink("link2");
    } else if (path.includes("/contact")) {
      setActiveLink("link3");
    } else {
      setActiveLink("");
    }
    const menuState = localStorage.getItem('showMenu') === 'true';
    setShowMenu(menuState);
    setShowBack(path !== "/main");
  }, []);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setTimeout(() => {
      setShowMenu(false);
      localStorage.setItem('showMenu', false);
    }, 200);
  };

  const handleLanguageSwitch = (lang) => {
    localStorage.setItem('showMenu', true);
    if (lang === "ES") {
      const currentPath = window.location.pathname;
      const newPath = `/es${currentPath}`;
      window.location.href = newPath;
    }
  };

  const toggleMenu = () => {
    const newMenuState = !showMenu;
    setShowMenu(newMenuState);
    localStorage.setItem('showMenu', newMenuState);
  };

  const handleBackClick = (event) => {
    event.preventDefault();
    window.history.back();
    setTimeout(() => {
      const path = window.location.pathname;
      if (path.includes("/projects")) {
        setActiveLink("link1");
      } else if (path.includes("/info")) {
        setActiveLink("link2");
      } else if (path.includes("/contact")) {
        setActiveLink("link3");
      } else {
        setActiveLink("");
      }
    }, 0);
  };

  return (
    <nav className={`nav ${!showMenu ? 'blend-mode-difference' : ''}`}>
      <div className="nav-content">
        {showBack && (
          <a className="nav-back" href="#" onClick={handleBackClick}>
            <Back />
          </a>
        )}
        <a className="nav-logo-cel" href="/main">
          <Isologo />
        </a>
        <a className="nav-logo" id="main" href="/main">
          <Logo />
        </a>
        <div className="nav-menu">
          <button className="menu" onClick={toggleMenu}>
            <Menu />
          </button>
        </div>
      </div>
      {showMenu && (
        <>
          <div className="nav-content-new">
            <a className="nav-logo-new" id="main" href="/main">
              {showMenu ? <LogoAzul /> : ""}
            </a>
          </div>
          <div className="dropdown-menu">
            <div className="nav-menu-new">
              <button className="menu-new" onClick={toggleMenu}>
                {showMenu ? <Close /> : ""}
              </button>
            </div>

            <div className="selector">
              <a
                href="/projects"
                onClick={() => handleLinkClick("link1")}
                className={activeLink === "link1" ? "active" : ""}
              >
                PROJECTS,
              </a>
              <a
                href="/info"
                onClick={() => handleLinkClick("link2")}
                className={activeLink === "link2" ? "active" : ""}
              >
                INFO,
              </a>
              <a
                href="/contact"
                onClick={() => handleLinkClick("link3")}
                className={activeLink === "link3" ? "active" : ""}
              >
                CONTACT,
              </a>
            </div>
            <div className="language">
              <a href="#" onClick={() => handleLanguageSwitch("ES")}>
                ES
              </a>
              /
              <a className="current" href="">
                EN
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
