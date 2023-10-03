import { Link } from "react-router-dom";
import "../styles/Footer.css"

function Footer() {
  return (
    <footer>
      <nav className="footerNav">
        <Link to="/contact">contact</Link>
      </nav>
    </footer>
  );
}

export default Footer;
