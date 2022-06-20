import Head from "next/head";

import Header from "../components/Header";

import styles from "../styles/Home.module.css";

/*

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty


*/

export default function Home() {
  return (
    <>
      <Head>
        <title>Shortly</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand&apos;s recognition and get detailed insights on how
            your link are performing
          </p>
          <button>Get started</button>
        </section>

        <section>
          <input type="text" placeholder="Shorten your link here..." />
          <button>Shorten it!</button>
        </section>

        <section>
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </section>

        <section>
          <div>
            <div>
              <div className="CIRCLE"></div>
              <h2>Brand recognition</h2>
              <p>Text</p>
            </div>
            <div>
              <div className="CIRCLE"></div>
              <h2>Brand recognition</h2>
              <p>Text</p>
            </div>
            <div>
              <div className="CIRCLE"></div>
              <h2>Brand recognition</h2>
              <p>Text</p>
            </div>
          </div>
        </section>
        <section>
          <h1>Boost your links today</h1>
          <button>Get started</button>
        </section>
      </main>

      <footer>
        <div className="LOGO"></div>

        <nav></nav>

        <div className="social"></div>
      </footer>
    </>
  );
}