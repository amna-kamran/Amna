import FadeIn from "./FadeIn";
import styles from "../styles/Project.module.css";
import { Nav } from "react-bootstrap";
import { GitHub } from "@mui/icons-material";
const Project = () => {
  const projects = [
    {
      title: "Portfolio",
      type: "Web",
      desc: " A portfolio website showcasing my projects.",
      techstack: "nextjs",
      icons: ["/nextjs.svg"],
    },
    {
      title: "Twitter Clone",
      type: "App",
      desc: " A semester ending project in react native with backend in firebase.",
      techstack: "react native, firebase",
      icons: ["/react.svg", "/firebase.svg"],
    },
    {
      title: "Todos",
      type: "App",
      desc: " A todo app where users can add, delete and edit tasks and images.",
      techstack: "flutter, firebase",
      icons: ["/flutter.svg", "/firebase.svg"],
    },
    {
      title: "Twitter Clone",
      type: "Web",
      desc: " A semester ending project in PHP and laravel with backend in SQL.",
      techstack: "php, laravel, sql",
      icons: ["/php.svg", "/laravel.svg", "/sql.svg"],
    },

    {
      title: "Text Summarizer with OCR",
      type: "App",
      desc: " A text summarizer for my software engineering course that uses OCR to extract text from images and then summarize them.",
      techstack: "flutter, firebase",
      icons: ["/flutter.svg", "/firebase.svg"],
    },
  ];
  return (
    <div id="about">
      <FadeIn>
        <div className="padding">
          <h3 className="heading">/projects</h3>
        </div>
        <div className={`${"padded_container"} ${styles.project_container}`}>
          {projects.map((project) => {
            return (
              <div
                className={`${"card"} ${styles.card}`}
                style={{ width: "21rem", height: "21rem" }}
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
                  <h6 className={styles.card_title}>
                    {project.title}
                    <span className={styles.type}> {project.type} </span>
                  </h6>

                  <p className={`${"card-text"} ${styles.description}`}>
                    {project.desc}
                  </p>
                  <div className={styles.bottom_line} />
                  <p className={styles.techstack}>{project.techstack}</p>
                  {project.icons?.map((icon) => {
                    return (
                      <img src={icon} style={{ marginRight: 5, height: 30 }} />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </div>
  );
};

export default Project;
