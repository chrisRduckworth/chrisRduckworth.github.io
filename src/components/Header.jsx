import { useContext } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import { Link } from "react-router-dom";
import Toggle from "react-toggle";
import { FiMoon, FiSun } from "react-icons/fi";
import "react-toggle/style.css";
import "../styles/Header.css";
import "../index.css";

function Header({ theme, setTheme }) {
  const { header } = useContext(HeaderContext);
  const tabs = ["Home", "Skills", "Projects", "About Me", "Contact"];

  const switchTheme = () => {
    const html = document.getElementsByTagName("html")[0];
    const newTheme = theme == "light" ? "dark" : "light";
    if (newTheme === "light") {
      html.classList.add("htmlLight");
    } else {
      html.classList.remove("htmlLight");
    }
    setTheme(newTheme);
  };

  return (
    <header>
      <div className="headerTitleContainer">
        <h1>
          <Link to="/" className="headerTitle">
            Christopher Duckworth
          </Link>
        </h1>
        <Toggle
          checked={theme === "dark"}
          onChange={switchTheme}
          icons={{ checked: <FiMoon />, unchecked: <FiSun /> }}
          className="darkModeToggle"
        />
      </div>
      <nav className="headerTabContainer">
        <Link
          to="/"
          className={header.tab === "Home" ? "activeTab" : "inactiveTab"}
        >
          Home
        </Link>
        <Link
          to="/skills"
          className={header.tab === "Skills" ? "activeTab" : "inactiveTab"}
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className={header.tab === "Projects" ? "activeTab" : "inactiveTab"}
        >
          Projects
        </Link>
        <Link
          to="/about-me"
          className={header.tab === "About Me" ? "activeTab" : "inactiveTab"}
        >
          About Me
        </Link>
        <Link
          to="/contact"
          className={header.tab === "Contact" ? "activeTab" : "inactiveTab"}
        >
          Contact
        </Link>
      </nav>
      <p className="headerURL">{header.url}</p>
      {/* <button onClick={switchTheme}>
        swap theme
      </button> */}
    </header>
  );
}

export default Header;
