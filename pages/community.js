import styles from '../styles/Home.module.css';
import NavBar from '/components/NavBar.js';
import Head from 'next/head';

export default function Community() {
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
            <h1 className={styles.questionheader}>
            What does Community mean to you?
            </h1>
            <p className={styles.answer}>
            At its core essence, Community is survival and connection. Humans are super social creatures. We need Community to not only combat loneliness, but to understand ourselves, each other, and how we make sense of the world. I think our need for strong Communities has only grown since the COVID-19 pandemic — compassion, empathy, understanding, and connection are gifts us humans need to practice and embody every day. Community is also a way for us to share our talents and knowledge with each other to make us all stronger as a whole.
            </p>
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