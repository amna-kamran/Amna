import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { LinkedIn, GitHub } from "@mui/icons-material/";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import styles from "../styles/Navbar.module.css";
const NavbarComponent = () => {
  return (
    <Navbar fixed="top" className={styles.background}>
      <Navbar.Brand className={styles.name} href="#">
        Amna Kamran
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className={styles.tab_text} href="#">
            Home
          </Nav.Link>
          <Nav.Link className={styles.tab_text} href="#">
            About
          </Nav.Link>
          <Nav.Link className={styles.tab_text} href="#">
            Experience
          </Nav.Link>
          <Nav.Link className={styles.tab_text} href="#">
            Projects
          </Nav.Link>
        </Nav>
        <Nav className="m1-auto">
          <Nav.Link
            href="mailto:amnakamran139@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EnvelopeIcon className={styles.icon} />
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/amnakamranbutt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className={styles.icon} />
          </Nav.Link>
          <Nav.Link
            href="https://github.com/amna-kamran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className={styles.icon} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarComponent;
