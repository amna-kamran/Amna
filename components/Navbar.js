import styles from "../styles/Navbar.module.css";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { LinkedIn, GitHub, Gite } from "@mui/icons-material/";
const Navbar = () => {
  return (
    <div className={styles.background}>
      <p className={styles.name}>Amna Kamran</p>
      <div className={styles.space} />
      <div className={styles.tabs}>
        <p className={styles.tab_text}>Home</p>
        <p className={styles.tab_text}>About</p>
        <p className={styles.tab_text}>Experience</p>
        <p className={styles.tab_text}>Projects</p>
      </div>
      <div className={styles.space_icons} />
      <div className={styles.icons}>
        <EnvelopeIcon className={styles.icon} />
        <GitHub className={styles.icon} />
        <LinkedIn className={styles.icon} />
      </div>
    </div>
  );
};
export default Navbar;
