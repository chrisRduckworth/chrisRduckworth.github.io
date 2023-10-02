import { useContext, useEffect } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import { Link } from "react-router-dom";
import SkillCard from "./SkillCard";
import "../styles/Home.css";

function Home() {
  const { setHeader } = useContext(HeaderContext);

  useEffect(() => {
    setHeader((currHeader) => {
      return { tab: "Home", url: "chrisDuckworth > home.html" };
    });
  }, []);
  return (
    <main>
      <section>
        <h1>Welcome</h1>
        <p>
          My name is Chris Duckworth, and I'm a newly-graduated software/web
          developer. I'm currently looking for work in and around the Cambridge
          (UK) area. Check out some of my&nbsp;
          <Link to="/projects" className="link">
            projects
          </Link>
          &nbsp;and the&nbsp;
          <Link to="/skills" className="link">
            skills
          </Link>
          &nbsp;I've used, learn a bit more&nbsp;
          <Link to="/about-me" className="link">
            about me
          </Link>
          , and feel free to get in touch using the info from&nbsp;
          <Link to="/contact" className="link">
            contact.
          </Link>
        </p>
      </section>
      <section>
        <div className="homeSubheader">
          <h2>Top Skills</h2>
          <Link to="/skills">see more {">"}</Link>
        </div>
        <div className="homeSection">
          <SkillCard skill="JavaScript" />
          <SkillCard skill="React" />
          <SkillCard skill="PSQL" />
        </div>
      </section>
      <section>
        <div className="homeSubheader">
          <h2>Latest Projects</h2>
          <Link to="/projects">see more {">"}</Link>
        </div>
        <div className="homeSection">
          
        </div>
      </section>
    </main>
  );
}

export default Home;
