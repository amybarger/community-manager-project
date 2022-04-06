import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Nav from '/components/Nav';
import Head from 'next/head';

export default function InAppRedirect() {
    return (
        <div>
            <Head>
            <title>Community Manager, Amy</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />

            <main className={styles.main}>
            <div className={styles.questions}>
            <h1 className={styles.questionheader}>
            Add a temporary in-app redirect to your project, redirecting /hello-vercel (or any path – but be sure to tell us which!) to https://vercel.com 
            </h1>
            <p className={styles.answer}>
            Done! I put the following code in the next.config.js file in my project:</p>
            <img src="screenshot_redirect.png" alt="Redirect code sample" className={styles.screenshot}></img>
            </div>
            </main>
            <footer className={styles.footer}>
                <a class="navbar-bran" href="https://vercel.com/about">
                <img src="/vercel_logo.png" alt="Vercel logo" className={styles.vercellogobottom}></img></a>
                 <p> Copyright © 2022 Vercel Inc. All rights reserved.</p>
            </footer>
            
        </div>
    )
}