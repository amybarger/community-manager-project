import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Fade from "react-awesome-reveal";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Community Manager, Amy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Fade duration='1000'>
        <img src="/BettyWhite.gif" alt="Gif of Betty White" className={styles.picsizes}></img>
        <h1 className={styles.title}>
          Welcome!
        </h1>

        <p className={styles.description}>
          Glad you’re here. Thanks for taking the time to check out my project!
        </p>
        </Fade>

        <Fade duration='1000'>
        <img src="/Amy.jpg" alt="Picture of Amy Barger" className={styles.picsizes}></img>
        <h1 className={styles.title}>
          This project belongs to...
        </h1>

        <p className={styles.description}>
          Amy Barger, Candidate for the Vercel Community Management role.
        </p>
        </Fade>

        <Fade duration='1000'>
        <img src="/vercel_icon.png" alt="Logos of apps and languages" className={styles.logosizes}></img>
        <img src="/nextjs_icon.png" alt="Logos of apps and languages" className={styles.logosizes}></img>
        <img src="/3Logos.png" alt="Logos of apps and languages" className={styles.picsizes}></img>
        <h1 className={styles.title}>
          Tools Used
        </h1>

        <p className={styles.description}>
          This project was completed in Next.js and React.js frameworks.
          <br></br>
          <br></br>
          Languages used: HTML, CSS, JavaScript.
        </p>
        </Fade>

        <Fade duration='1000'>
        <img src="/JanelleMonae.gif" alt="Gif of Janelle Monae" className={styles.picsizes}></img>
        <h1 className={styles.title}>
          Answers to questions
        </h1>

        <p className={styles.description}>
          First off — these questions were a fun challenge! You can click here to a directory of the questions linking to my answers. These are also located in the nav bar at the top of this page. Enjoy!
        </p>
        </Fade>

      </main>

      <footer className={styles.footer}>
        <p> Copyright © 2022 Vercel Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}
