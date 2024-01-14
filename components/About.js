import styles from "../styles/About.module.css";
import FadeIn from "./FadeIn";
const About = () => {
  const languages = ["javascript ES6+", "dart", "python", "java"];
  const frameworks = ["reactJS", "nextjs", "react native", "flutter"];
  return (
    <div id="about">
      <FadeIn>
        <div className="padding">
          <h3 className="heading">/about me</h3>
          <p className="text">
            I am currently a 4th year
            <span className={styles.highlight}> computer science</span> student
            at
            <span className={styles.highlight}>
              {" "}
              COMSATS University Islamabad.
            </span>
          </p>
          <br />
          <p className="text">Some languages i have been working with:</p>

          <div className={styles.language_container}>
            <ul className="ul">
              {languages.map((language, i) => {
                console.log(i);
                return (
                  <FadeIn delay={`${i + 1}00ms`}>
                    <li>{language}</li>
                  </FadeIn>
                );
              })}
            </ul>
          </div>
          <p className="text">Frameworks:</p>
          <div className={styles.language_container}>
            <ul className="ul">
              {frameworks.map((framework, i) => {
                console.log(i);
                return (
                  <FadeIn delay={`${i + 2}50ms`}>
                    <li>{framework}</li>
                  </FadeIn>
                );
              })}
            </ul>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default About;