import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Nav from '/components/Nav.js';
import Head from 'next/head';

export default function Learn() {
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
            What do you want to learn, or do more of, at work?
            </h1>
            <p className={styles.answer}>
            I’d love to do more projects that require a deeper-dive investigation to come up with really cool campaigns or solutions that apply the majority of my skill sets and passions. What’s exciting about the Community Manager role at Vercel is how I could help build a stronger sense of community for Vercel users, provide them solutions with my knowledge of code and growing understanding of Vercel and its products, and also my data analysis skills to understand and tackle current challenges for the users. I love a role that doesn’t keep me in a super tight box and allows me to expand in many ways!
            </p>
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