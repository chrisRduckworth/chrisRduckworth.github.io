import { useContext, useEffect } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import { projects } from "./projects.json";
import SkillCard from "./SkillCard";
import "../styles/Skills.css";

function Skills() {
  const { setHeader } = useContext(HeaderContext);
  const skills = projects
    .map((project) => project.skills)
    .flat()
    .filter((skill, i, arr) => arr.indexOf(skill) === i);

  useEffect(() => {
    window.scrollTo(0, 0)
    setHeader((currHeader) => {
      return { tab: "Skills", url: "chrisDuckworth > skills.html" };
    });
  }, []);

  return (
    <main>
      <div className="skillsHeader">
        <h1>Skills</h1>
        <span>To see projects using a certain skill, click on the logo</span>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div className="skillCardGrid">
          {skills.map((skill) => (
            <SkillCard skill={skill} key={skill} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Skills;
