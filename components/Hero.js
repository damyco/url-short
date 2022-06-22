import Button from "./Button";

import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1>More than just shorter links</h1>
        <p className={styles.paraHero}>
          Build your brand&apos;s recognition and get detailed insights on how
          your link are performing
        </p>
        <Button style="primary">Get started</Button>
      </div>
      <div>
        <img
          className={styles.bgImage}
          src="/illustration-working.svg"
          alt=""
        />
      </div>
    </section>
  );
}
