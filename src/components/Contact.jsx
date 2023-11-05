import { useContext, useEffect } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import "../styles/Contact.css"

function Contact() {
  const { setHeader } = useContext(HeaderContext);

  useEffect(() => {
    setHeader((currHeader) => {
      return { tab: "Contact", url: "chrisDuckworth > contact.html" };
    });
  }, []);
  return <main>
    <h1>Contact</h1>
    <ul className="contactList">
      <li>Email: <a href="mailto:c_duckworth@hotmail.com" target="_blank">c_duckworth@hotmail.com</a></li>
      <li>LinkedIn: <a href="https://www.linkedin.com/in/chris-duckworth-20a9401a3/" target="_blank">chris-duckworth-20a9401a3</a></li>
      <li>Github: <a href="https://github.com/chrisRduckworth" target="_blank">chrisRduckworth</a></li>
      <li>CV: <a href="https://docdro.id/qIIk7Jl" target="_blank">here</a></li>
    </ul>
  </main>
}

export default Contact;
