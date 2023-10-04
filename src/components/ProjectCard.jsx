import { Link } from "react-router-dom";
import { projects } from "./projects.json";
import "../styles/ProjectCard.css";
import { useState } from "react";
import { cleanDescription } from "../../utils/description";

function ProjectCard({ title }) {
  const project = projects.find((project) => project.title === title);
  const [isLoading, setIsLoading] = useState(true);
  const { images, description } = project;

  return (
    <Link to={`/projects/${title}`} className="projectCard">
      <h2>{title}</h2>
      <div className={isLoading ? "projectCardLoading" : "projectCardLoaded"}>
        <p className="projectCardLoadingText">Loading...</p>
      </div>
      <img
        src={`/assets/project-photos/${images[0]}`}
        alt={`${title} project thumbnail`}
        className={isLoading ? "projectCardLoaded" : "projectCardThumbnail"}
        onLoad={() => setIsLoading(false)}
      />
      <p>{cleanDescription(description)}</p>
    </Link>
  );
}

export default ProjectCard;
