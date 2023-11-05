import { useContext, useEffect } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import { useParams } from "react-router-dom";
import { projects } from "./projects.json";
import SkillCard from "./SkillCard";
import ProjectDescription from "./ProjectDescription";
import { camelCase } from "../../utils/utils";
import "../styles/Project.css";

function Project() {
	const { setHeader } = useContext(HeaderContext);
	const { title } = useParams();

	const project = projects.find((project) => project.title === title);

	useEffect(() => {
		window.scrollTo(0, 0);
		setHeader((currHeader) => {
			return {
				tab: "Projects",
				url: `chrisDuckworth > projects > ${camelCase(title)}.html`,
			};
		});
	}, []);

	if (!project)
		return (
			<main>
				<p>Oops, something went wrong</p>
			</main>
		);

	return (
		<main>
			<h1>{project.title}</h1>
			<ProjectDescription
				description={project.description}
				imagesArr={project.images}
			/>
			<h2>Links</h2>
			<ul className="projectLinks">
				{Object.entries(project.links).map(([name, link]) => {
					return (
						<li key={name}>
							<a href={link} target="_blank">
								{name}
							</a>
						</li>
					);
				})}
			</ul>
			<h2>Skills</h2>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<div className="skillCardGrid">
					{project.skills.map((skill) => {
						return <SkillCard key={skill} skill={skill} />;
					})}
				</div>
			</div>
		</main>
	);
}

export default Project;
