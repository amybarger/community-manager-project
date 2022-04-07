import styles from '../styles/Home.module.css';
import NavBar from '/components/NavBar.js';
import Head from 'next/head';

export default function Article() {
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
            Which technical article, guide or lightning talk left the biggest positive impression on you? Why? Ideally, this article would not be associated with Vercel or web development, by the way! Please provide links. 
            </h1>
            <p className={styles.answer}>
            Eric Ries’ article, <a href="https://www.fastcompany.com/1669738/to-get-to-the-root-of-a-hard-problem-just-ask-why-five-times"><u><i>To Get to the Root of a Hard Problem, Just Ask “Why” Five Times</i></u></a>, really resonated with me when I read it. It was a resource provided by the Google Data Analytics certification program. The article is a careful examination of why it’s so important to dig deeper and ask more meaningful questions when getting to the root of a problem. It reveals that the root solution is often followed by a series of issues that may otherwise not be apparent. I think this is a common issue in everyday business management. What we often thought was stitching up the problem was only a bandaid. This article helped drive-home my passion for more data-driven solutions to help a business and its community better connect and understand what’s really happening, not what we think is happening.
            <br></br>
            <br></br>
            Also, some books I got recently that I can’t wait to read through: <a href="https://www.goodreads.com/book/show/34890015-factfulness"><u><i>Factfulness</i></u></a> by Hans Rosling; <a href="https://www.goodreads.com/en/book/show/58330567-atlas-of-the-heart"><u><i>Atlas of the Heart: Mapping Meaningful Connection and the Language of the Human Experience</i></u></a> by Brené Brown; and <a href="https://www.barnesandnoble.com/w/how-to-be-everything-emilie-wapnick/1124232447"><u><i>How to Be Everything</i></u></a> by Emilie Wapnick.
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