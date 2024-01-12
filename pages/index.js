import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import { Comfortaa } from "next/font/google";
import NavbarComponent from "../components/Navbar";
import Intro from "../components/Intro";
const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300"],
});
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={comfortaa.className}>
        <NavbarComponent />
        <Intro />
      </main>
    </div>
  );
}
