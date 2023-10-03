import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { HeaderContext } from "../contexts/HeaderContext";
import { projects } from "./projects.json";
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const { setHeader } = useContext(HeaderContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [projectsToDisplay, setProjectsToDisplay] = useState(projects);

  const skills = projects
    .map((project) => project.skills)
    .flat()
    .filter((skill, i, arr) => arr.indexOf(skill) === i);

  const handleFormChange = ({ target: { value } }) => {
    setSearchParams({ skill: value });
  };

  useEffect(() => {
    setProjectsToDisplay((currProjects) => {
      if (!searchParams.get("skill")) {
        return projects;
      }
      return projects.filter((project) => {
        return project.skills.includes(searchParams.get("skill"));
      });
    });
  }, [searchParams]);

  useEffect(() => {
    setHeader((currHeader) => {
      return { tab: "Projects", url: "chrisDuckworth > projects.html" };
    });
  }, []);

  return (
    <main>
      <div className="projectsHeaderContainer">
        <h1>Projects</h1>
        <form>
          <label htmlFor="skills-form">skills: </label>
          <select
            id="skills-form"
            onChange={handleFormChange}
            defaultValue={searchParams.get("skill") || ""}
          >
            <option value="">View all</option>
            {skills.map((skill) => {
              return (
                <option value={skill} key={skill}>
                  {skill}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="gridContainer">
        <div className="projectCardsContainer">
          {projectsToDisplay.map((project) => (
            <ProjectCard title={project.title} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Projects;
