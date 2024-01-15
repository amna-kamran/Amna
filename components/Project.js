import FadeIn from "./FadeIn";
import styles from "../styles/Project.module.css";
import { Nav } from "react-bootstrap";
import { GitHub } from "@mui/icons-material";
const Project = () => {
  return (
    <div id="about">
      <FadeIn>
        <div className="padding">
          <h3 className="heading">/projects</h3>
        </div>
        <div className="padded_container">
          <div
            className={`${"card"} ${styles.card}`}
            style={{ width: "18rem", height: "18rem" }}
          >
            <Nav.Link
              href="https://github.com/amna-kamran"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3"
            >
              <GitHub className={styles.icon} />
            </Nav.Link>
            <div className="card-body">
              <h6 className={styles.card_title}>Twitter Clone</h6>
              <p className={`${"card-text"} ${styles.description}`}>
                A semester ending project in react native with backend in
                firebase.
              </p>
              <div className={styles.bottom_line} />
              <p className={styles.techstack}>react native, firebase</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Project;
