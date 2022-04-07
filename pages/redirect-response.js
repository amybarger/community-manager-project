import styles from '../styles/Home.module.css';
import NavBar from '/components/NavBar.js';
import Head from 'next/head';

export default function RedirectResponse() {
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
            Imagine a customer reaches out in our GitHub community asking `&quot;`How do I do a redirect from /hello-vercel to https://vercel.com?`&quot;` In a couple of paragraphs, how do you respond?
            </h1>
            <p className={styles.answer}>
            When responding, my goal is to make my message personal to them, polite, thoughtful, and helpful. It also would be a good opportunity to ask if they’d like to participate in a survey we’re doing to better understand our community, or any other projects we might have going on where we’re looking for participation from Vercel users. I’ve found using methods like these in previous roles are effective. I also think it’s great to let them know they’re talking to an individual, not just an entity.
            <br></br>
            <br></br>
            <u>My response:</u>
            <br></br>
            `&quot;`Hey Sam! I’m Amy with Vercel. First, I want to say your pinned mileage calculator project is super impressive. The impact you’re leaving on others with that tool is felt! Thanks for being a part of this community — glad you’re here.
            <br></br>
            <br></br>
            To answer your question, accurately, I would need to know what framework you are working in for in-app redirects or if you need a domain redirect. Can you provide that to me? There’s generally a simple solution to this! <a href ="https://vercel.com/support/articles/does-vercel-support-permanent-redirects?query=redire#in-application-redirects"><u>Here's our resource for any redirect.</u></a> Please let me know if this was helpful or if you need further assistance!
            <br></br>
            <br></br>
            <i>I would send the following reply after Sam has their solution, since their main desire is an answer to their question.</i> 
            <br></br>
            <br></br>
            Sam, glad we were able to help! If you have the time — would you be interested in participating in a survey to help us better understand our Vercel community and meet their needs? If so, we’d appreciate your support so much. Here’s a link to that survey: (link to survey).`&quot;`
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