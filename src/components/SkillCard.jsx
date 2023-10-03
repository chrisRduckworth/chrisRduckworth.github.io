import { Link } from "react-router-dom";
import "../styles/SkillCard.css";
import { useState } from "react";

function SkillCard({ skill }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link to={`/projects?skill=${skill}`} className="skillCard">
      <div className={isLoading ? "skillCardLoading" : "skillCardLoaded"}>
        <p className="skillCardLoadingText">Loading...</p>
      </div>
      <img
        src={`./public/assets/${skill}.png`}
        alt={`${skill} logo`}
        onLoad={() => setIsLoading(false)}
        className={isLoading ? "skillCardLoaded" : "skillCardImg"}
      />
      <p>{skill}</p>
    </Link>
  );
}

export default SkillCard;
