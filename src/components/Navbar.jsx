import "./Navbar.css";
import { useState } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  return (

      <nav>
        <a
          id="projects"
          href="/projects"
          className={activeLink === "projects" ? "active" : ""}
          onClick={() => handleLinkClick("projects")}
        >
          projects
        </a>
        {/* <a
          id="indices"
          href="/indices"
          className={activeLink === "indices" ? "active" : ""}
          onClick={() => handleLinkClick("indices")}
        >
          index
        </a> */}
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
          <img
            className="logocel"
            src="/FL.png"
            alt="federico liberati logo"
          />
        </a>
        {/* <p
          id="contact"
          className={activeLink === "contact" ? "active" : ""}
          onMouseEnter={() => setActiveLink("contact")}
          onMouseLeave={() => setActiveLink("")}
        >
          contact
          {activeLink === "contact" && (
            <adress className="hover-text">
              <div className="container-text">
                <a
                  href="https://www.instagram.com/federico__liberati/"
                  target="_blank"
                >
                  <strong>Instagram</strong>
                </a>
                <a href="mailto:federicoliberati@gmail.com" rel="mailto">
                  <strong>E-mail</strong>
                </a>
              </div>
            </adress>
          )}
        </p> */}
        <a
          id="about"
          href="/about"
          className={activeLink === "about" ? "active" : ""}
          onClick={() => handleLinkClick("about")}
          // onMouseEnter={() => setActiveLink("about")}
          // onMouseLeave={() => setActiveLink("")}
        >
          about
          {/* {activeLink === "about" && (
            <div className="hover-text-about">
              <div className="container-text-about">
                <p>
                  Im an Argentinian architect based in Buenos Aires & Barcelona.
                  Ive started my solo practice in 2017, having worked in
                  association with other professionals throughout the years. I
                  specialize on commercial & gastronomic architecture aswell on
                  private housing & refurbishments. Each project is developed
                  with site specific solutions and bespoke furniture & objects,
                  intending to portray a unique vision for each of them.
                </p>
              </div>
            </div>
          )} */}
        </a>
      </nav>
  );
};

export default NavBar;
