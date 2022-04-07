import styles from '../styles/Home.module.css';
import Link from 'next/link';
import NavBar from '/components/NavBar.js';
import Head from 'next/head';

export default function All() {
    return (
        <div>
            <Head>
            <title>Community Manager, Amy</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />
            
            <main className={styles.main}>
            <div className={styles.questions}>
            <h1 className={styles.title}>
                Questions Directory
            </h1>
            <p className={styles.description}>
                Click any question below for the answer.
            </p>

            <ul>
            <div className={styles.linkquestions}>
                <li>
                    
                    <Link href="/article">
                        
                        <a>Which technical article, guide or lightning talk left the biggest positive impression on you? Why? Ideally, this article would not be associated with Vercel or web development, by the way! Please provide links.</a>
                    </Link>
                </li>
                <br></br>
                <li>
                    <Link href="/learn">
                        <a>What do you want to learn, or do more of, at work?</a>
                    </Link>
                </li>
                <br></br>
                <li>
                    <Link href="/inapp-redirect">
                        <a>Add a temporary in-app redirect to your project, redirecting /hello-vercel (or any path – but be sure to tell us which!) to https://vercel.com</a>
                    </Link>
                </li>
                <br></br>
                <li>
                    <Link href="/redirect-response">
                        <a>Imagine a customer reaches out in our GitHub community asking `&quot;`How do I do a redirect from /hello-vercel to https://vercel.com?`&quot;` In a couple of paragraphs, how do you respond?</a>
                    </Link>
                </li>
                <br></br>
                <li>
                    <Link href="/domain">
                        <a>A customer writes in to our GitHub community stating `&quot;`I have a custom domain which I purchased at GoDaddy and I want to use it on my project`&quot;`. In a couple of paragraphs, how do you respond?</a>
                    </Link>
                </li>
                <br></br>
                <li>
                    <Link href="/community">
                        <a>What does Community mean to you?</a>
                    </Link>
                </li>
                <br></br>
                <li>
                    <Link href="/better-response">
                        <a>Would, or how would, you improve the response shared with a customer here?</a>
                    </Link>
                </li>
                <br></br>
                <li>
                    <Link href="/common-problems">
                        <a>What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?</a>
                    </Link>
                </li>
                <br></br>
                <li>
                    <Link href="/flagship">
                        <a>If you could make one change to our flagship community, what would it be and why?</a>
                    </Link>
                </li>
                <br></br>
                <li>
                    <Link href="/exercise">
                        <a>How could we improve or alter this familiarisation exercise?</a>
                    </Link>
                </li>
                
                </div>
            </ul>
            </div>
            </main>
            <footer className={styles.footer}>
                <a className="navbar-bran" href="https://vercel.com/about">
                <img src="/vercel_logo.png" alt="Vercel logo" className={styles.vercellogobottom}></img></a>
                 <p> Copyright © 2022 Vercel Inc. All rights reserved.</p>
            </footer>
        </div>
    )
}