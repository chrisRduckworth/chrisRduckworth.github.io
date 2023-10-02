import { useContext, useEffect } from "react";
import { HeaderContext } from "../contexts/HeaderContext";

function AboutMe() {
  const { setHeader } = useContext(HeaderContext);

  useEffect(() => {
    setHeader((currHeader) => {
      return { tab: "About Me", url: "chrisDuckworth > aboutMe.html" };
    });
  }, []);
  return <p>about me</p>;
}

export default AboutMe;
