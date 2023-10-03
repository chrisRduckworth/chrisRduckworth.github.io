import { useContext, useEffect } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import { useParams } from "react-router-dom";

function Project() {
  const { setHeader } = useContext(HeaderContext);
  const { title } = useParams();
  useEffect(() => {
    setHeader((currHeader) => {
      return {
        tab: "Projects",
        url: `chrisDuckworth > projects > ${title}.html`,
      };
    });
  }, []);
  return <p>{title}</p>;
}

export default Project;
