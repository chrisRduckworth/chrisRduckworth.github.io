import { useContext, useEffect } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import { Link } from "react-router-dom";
import { projects } from "./projects.json"
import SkillCard from "./SkillCard";
import ProjectCard from "./ProjectCard";
import "../styles/Home.css";

function Home() {
  const { setHeader } = useContext(HeaderContext);

  useEffect(() => {
    window.scrollTo(0, 0)
    setHeader((currHeader) => {
      return { tab: "Home", url: "chrisDuckworth > home.html" };
    });
  }, []);
  return (
    <main>
      <h1>Welcome</h1>
      <section>
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
        <div className="skillsSection">
          <SkillCard skill="JavaScript" />
          <SkillCard skill="React" />
          <SkillCard skill="PSQL" />
          <SkillCard skill="Python" />
          <SkillCard skill="Jest" />
        </div>
      </section>
      <section>
        <div className="homeSubheader">
          <h2>Latest Projects</h2>
          <Link to="/projects">see more {">"}</Link>
        </div>
        <div className="homeSection">
          <ProjectCard title={projects[0].title} />
          <ProjectCard title={projects[1].title} />
        </div>
      </section>
    </main>
  );
}

export default Home;
