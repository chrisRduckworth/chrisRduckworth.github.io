import { useContext, useEffect } from "react";
import { HeaderContext } from "../contexts/HeaderContext";

function Contact() {
  const { setHeader } = useContext(HeaderContext);

  useEffect(() => {
    setHeader((currHeader) => {
      return { tab: "Contact", url: "chrisDuckworth > contact.html" };
    });
  }, []);
  return <p>contact</p>;
}

export default Contact;
