import { useContext, useEffect } from "react";
import { HeaderContext } from "../contexts/HeaderContext";

function Projects() {
  const { setHeader } = useContext(HeaderContext);

  useEffect(() => {
    setHeader((currHeader) => {
      return { tab: "Projects", url: "chrisDuckworth > projects.html" };
    });
  }, []);
  return <p>projects</p>;
}

export default Projects;
