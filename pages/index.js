import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Fade from "react-awesome-reveal";
import NavBar from '/components/NavBar.js';
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Community Manager, Amy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className={styles.main}>
        <div className={styles.textalignall}>
          <Fade duration='1000'>
            <img src="/BettyWhite.gif" alt="Gif of Betty White" className={styles.picsizes}></img>
           <div className={styles.textalign}>
              <h1 className={styles.title}>
                Welcome to my page!
             </h1>

              <p className={styles.description}>
                Glad you’re here. Thanks for taking the time to check out my project!   More below. :D
              </p>
            </div>
          </Fade>
        </div>

        <div className={styles.textalignall}>
          <Fade duration='1000'>
            <img src="/Amy.jpg" alt="Picture of Amy Barger" className={styles.picsizes}></img>
              <div className={styles.textalign}>
                <h1 className={styles.title}>
                  Who did this stuff?
                </h1>

                <p className={styles.description}>
                  Amy Barger, Candidate for the Vercel Community Management role.
                </p>
              </div>
          </Fade>
        </div>

        <div className={styles.textalignall}>
          <Fade duration='1000'>
            <div className={styles.logosalign}>
              <div className={styles.vercelnexticons}>
              <div className={styles.vercelicon}>
              <img src="/vercel_icon.png" alt="Logos of apps and languages" className={styles.logosizes}></img>
           </div>
              <img src="/nextjs_icon.png" alt="Logos of apps and languages" className={styles.logosizes}></img>
              </div>
              <div className={styles.languagesicons}>
              <img src="/3Logos.png" alt="Logos of apps and languages" className={styles.picsizes}></img>
              </div>
            </div>
            <div className={styles.textalign}>
              <h1 className={styles.title}>
              Tools Used
              </h1>
              <p className={styles.description}>
              This project was completed in Next.js and React.js frameworks.
              <br></br>
              <br></br>
              Languages used: HTML, CSS, JavaScript.
              </p>
            </div>
          </Fade>
        </div>

        <div className={styles.textalignall}>
          <Fade duration='1000'>
            <img src="/JanelleMonae.gif" alt="Gif of Janelle Monae" className={styles.picsizes}></img>
            <div className={styles.textalign}>
              <h1 className={styles.title}>
                Answers to questions
              </h1>

              <p className={styles.description}>
                First off — these questions were a fun challenge! You can <Link href="/questions"><a><u>click here</u></a></Link> to a directory of the questions with my answers. These are also located in the nav bar at the top of this page. Enjoy!
              </p>
            </div>
          </Fade>
        </div>

      </main>

      <footer className={styles.footer}>
        <a className="navbar-bran" href="https://vercel.com/about">
          <img src="/vercel_logo.png" alt="Vercel logo" className={styles.vercellogobottom}></img>
        </a>
        <p> Copyright © 2022 Vercel Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}
