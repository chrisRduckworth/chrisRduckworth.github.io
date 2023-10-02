import { useContext } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const { header } = useContext(HeaderContext);
  const tabs = ["Home", "Skills", "Projects", "About Me", "Contact"];
  return (
    <header>
      <h1>
        Christopher Duckworth
      </h1>
      <nav className="headerTabContainer">
        <Link to="/" className={header.tab === "Home" ? "activeTab" : "inactiveTab"}>Home</Link>
        <Link to="/skills" className={header.tab === "Skills" ? "activeTab" : "inactiveTab"}>Skills</Link>
        <Link to="/projects" className={header.tab === "Projects" ? "activeTab" : "inactiveTab"}>Projects</Link>
        <Link to="/about-me" className={header.tab === "About Me" ? "activeTab" : "inactiveTab"}>About Me</Link>
        <Link to="/contact" className={header.tab === "Contact" ? "activeTab" : "inactiveTab"}>Contact</Link>
      </nav>
      <p className="headerURL">
        {header.url}
      </p>
    </header>
  );
}

export default Header;
