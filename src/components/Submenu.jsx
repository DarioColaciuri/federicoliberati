import "./Submenu.css";
import { useState } from "react";

const Submenu = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  return (
    <div className="submenu">
      <ul>
        <li>
          <a
            href="/projects"
            className={activeLink === "projects" ? "active" : ""}
            onClick={() => handleLinkClick("projects")}
          >
            all
          </a>
          <a
            id="architecture"
            href="/projects/architecture"
            className={activeLink === "architecture" ? "active" : ""}
            onClick={() => handleLinkClick("architecture")}
          >
            architecture
          </a>
          <a
            id="objects"
            href="/projects/objects"
            className={activeLink === "objects" ? "active" : ""}
            onClick={() => handleLinkClick("objects")}
          >
            objects
          </a>
          <a
            id="process"
            href="/projects/process"
            className={activeLink === "process" ? "active" : ""}
            onClick={() => handleLinkClick("process")}
          >
            process
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Submenu;
