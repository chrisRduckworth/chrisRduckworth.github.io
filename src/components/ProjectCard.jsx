import { Link } from "react-router-dom";
import { projects } from "./projects.json";
import "../styles/ProjectCard.css";

function ProjectCard({ title }) {
  const project = projects.find((project) => project.title === title);
  const { images, description } = project;
  
  return (
    <Link to={`/projects/${title}`} className="projectCard">
      <h2>{title}</h2>
      <img src={`/assets/project-photos/${images[0]}`} alt={`${title} project thumbnail`} className="projectCardThumbnail"/>
      <p>{description}</p>
    </Link>
  );
}

export default ProjectCard;
