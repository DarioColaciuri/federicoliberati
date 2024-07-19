import "./Navbar.css";
import { useState, useEffect } from "react";
import Logo from "./svg/Logo";
import Menu from "./svg/Menu";
import Close from "./svg/Close";
import Back from "./svg/Back";
import LogoAzul from "./svg/LogoAzul";
import Isologo from "./svg/Isologo";

const NavBarES = () => {
  const [activeLink, setActiveLink] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setShowMenu(false);
  };

  const handleLanguageSwitch = (lang) => {
    const currentPath = window.location.pathname;
    if (lang === "EN") {
      const newPath = currentPath.startsWith("/es")
        ? currentPath.substring(3)
        : currentPath;
      window.location.href = newPath;
    }
  };

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
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
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

  const isSpanishPath = window.location.pathname.startsWith("/es");

  const getLinkPath = (path) => {
    const currentPath = window.location.pathname;
    if (isSpanishPath) {
      return `/es${path}`;
    } else {
      return path;
    }
  };

  return (
    <nav className={`nav ${!showMenu ? 'blend-mode-difference' : ''}`}>
      <div className="nav-content">
        <a className="nav-back" href="#" onClick={handleBackClick}>
          <Back />
        </a>
        <a className="nav-logo-cel" href="/es/main">
          <Isologo />
        </a>
        <a className="nav-logo" id="main" href="/es/main">
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
            <a className="nav-logo-new" id="main" href="/es/main">
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
                href={getLinkPath("/projects")}
                onClick={() => handleLinkClick("link1")}
                className={activeLink === "link1" ? "active" : ""}
              >
                OBRAS,
              </a>
              <a
                href={getLinkPath("/info")}
                onClick={() => handleLinkClick("link2")}
                className={activeLink === "link2" ? "active" : ""}
              >
                INFO,
              </a>
              <a
                href={getLinkPath("/contact")}
                onClick={() => handleLinkClick("link3")}
                className={activeLink === "link3" ? "active" : ""}
              >
                CONTACTO,
              </a>
            </div>
            <div className="language">
              <a className="current" href="">ES</a>/<a href="#" onClick={() => handleLanguageSwitch('EN')}>EN</a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBarES;
