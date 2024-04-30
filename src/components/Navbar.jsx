import "./Navbar.css";
import { useState } from "react";

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
    <nav>
      {!showMenu ? (
        <button className="menu" onClick={toggleMenu}>
          <i className="bi bi-list menubtn"></i>
        </button>
      ) : (
        <button className="menu close" onClick={toggleMenu}>
          <i className="bi bi-x-lg menubtn"></i>
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
        <img
          className="logo"
          src="/federicoliberati.png"
          alt="federico liberati logo"
        />
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