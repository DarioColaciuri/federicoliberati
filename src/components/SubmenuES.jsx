import "./Submenu.css";
import { useState, useEffect } from "react";

const SubmenuES = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/es/projects") {
      setActiveLink("projects");
    } else if (path.includes("/es/projects/architecture")) {
      setActiveLink("architecture");
    } else if (path.includes("/es/projects/objects")) {
      setActiveLink("objects");
    } else if (path.includes("/es/projects/process")) {
      setActiveLink("process");
    } else if (path.includes("/es/projects/indices")) {
      setActiveLink("indices");
    } else {
      setActiveLink("");
    }
  }, []);

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  return (
    <div className="submenu es">
      <ul>
        <li>
          <a
            href="/es/projects"
            className={activeLink === "projects" ? "active" : ""}
            onClick={() => handleLinkClick("projects")}
          >
            todo
          </a>
          <a
            id="architecture"
            href="/es/projects/architecture"
            className={activeLink === "architecture" ? "active" : ""}
            onClick={() => handleLinkClick("architecture")}
          >
            arquitectura
          </a>
          <a
            id="objects"
            href="/es/projects/objects"
            className={activeLink === "objects" ? "active" : ""}
            onClick={() => handleLinkClick("objects")}
          >
            mobiliario
          </a>
          <a
            id="process"
            href="/es/projects/process"
            className={activeLink === "process" ? "active" : ""}
            onClick={() => handleLinkClick("process")}
          >
            proceso
          </a>
          <a
            id="indices"
            href="/es/projects/indices"
            className={activeLink === "indices" ? "active" : ""}
            onClick={() => handleLinkClick("indices")}
          >
            indice
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SubmenuES;
