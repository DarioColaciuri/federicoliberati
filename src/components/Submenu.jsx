import "./Submenu.css";
import { useState, useEffect } from "react";

const Submenu = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/projects") {
      setActiveLink("projects");
    } else if (path.includes("/projects/architecture")) {
      setActiveLink("architecture");
    } else if (path.includes("/projects/objects")) {
      setActiveLink("objects");
    } else if (path.includes("/projects/process")) {
      setActiveLink("process");
    } else if (path.includes("/projects/indices")) {
      setActiveLink("indices");
    } else {
      setActiveLink("");
    }
  }, []);

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
          <a
            id="indices"
            href="/projects/indices"
            className={activeLink === "indices" ? "active" : ""}
            onClick={() => handleLinkClick("indices")}
          >
            index
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Submenu;
