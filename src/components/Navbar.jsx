import "./Navbar.css";
import { useState } from "react";
import Logo from "./svg/Logo"
import Menu from "./svg/Menu"
import Close from "./svg/Close"

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="nav">
      {!showMenu ? (
        <button className="menu" onClick={toggleMenu}>
          <Menu />
        </button>
      ) : (
        <button className="menu close" onClick={toggleMenu}>
          <Close />
        </button>
      )}
      <div className={showMenu ? "desplegable menu-on" : "desplegable"}>
        <div className="container">
          <a href="/projects">projects</a>
          <a href="/about">about</a>
        </div>
      </div>
      <a
        id="projects"
        href="/projects"
        className={activeLink === "projects" ? "active" : ""}
        onClick={() => handleLinkClick("projects")}
      >
        projects
      </a>

      <a
        id="main"
        href="/main"
        className={activeLink === "main" ? "active" : ""}
        onClick={() => handleLinkClick("main")}
      >
        <Logo />
      </a>

      <a
        id="about"
        href="/about"
        className={activeLink === "about" ? "active" : ""}
        onClick={() => handleLinkClick("about")}
      >
        about
      </a>
    </nav>
  );
};

export default NavBar;