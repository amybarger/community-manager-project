import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Nav from '/components/Nav.js';
import Head from 'next/head';

export default function All() {
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
            <h1 className={styles.title}>
                Questions Directory
            </h1>
            <p className={styles.description}>
                Click any question below for the answer.
            </p>

            <ul>
                <li>
                    <div className={styles.linkquestions}>
                    <Link href="/article">
                        
                        <a >Which technical article, guide or lightning talk left the biggest positive impression on you? Why? Ideally, this article would not be associated with Vercel or web development, by the way! Please provide links.</a>
                    </Link>
                    </div>
                </li>
            </ul>
            </div>
            </main>
            
            
        </div>
    )
}