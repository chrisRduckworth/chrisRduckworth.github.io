import { useContext, useEffect } from "react";
import { HeaderContext } from "../contexts/HeaderContext";

function Skills() {
  const { setHeader } = useContext(HeaderContext);

  useEffect(() => {
    setHeader((currHeader) => {
      return { tab: "Skills", url: "chrisDuckworth > skills.html" };
    });
  }, []);
  return <p>skills</p>;
}

export default Skills;
