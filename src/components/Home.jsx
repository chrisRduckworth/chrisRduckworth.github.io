import { useContext, useEffect } from "react";
import { HeaderContext } from "../contexts/HeaderContext";

function Home() {
  const { setHeader } = useContext(HeaderContext);

  useEffect(() => {
    setHeader((currHeader) => {
      return { tab: "Home", url: "chrisDuckworth > home.html" };
    });
  }, []);
  return <p>home</p>;
}

export default Home;
