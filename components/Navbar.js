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
      <Nav.Link className={styles.name} href="#">
        Amna Kamran
      </Nav.Link>
      <Nav className={`${styles.tabs} me-auto`}>
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
      <Nav className={`${styles.icons} m1-auto`}>
        <Nav.Link>
          <EnvelopeIcon className={styles.icon} />
        </Nav.Link>
        <Nav.Link>
          <LinkedIn className={styles.icon} />
        </Nav.Link>
        <Nav.Link>
          <GitHub className={styles.icon} />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default NavbarComponent;
