import Button from "./Button";

import styles from "../styles/ShortenLink.module.css";

export default function ShortenLink() {
  return (
    <>
      <section className={styles.wrapper}>
        <form className={styles.container}>
          <input
            className={styles.linkInput}
            type="url"
            placeholder="Shorten a link here..."
          />
          <Button style="primary">Shorten it!</Button>
        </form>
      </section>
      <div className={styles.linksContainer}>
        <p>url</p>
        <p>short url</p>
        <Button style="primary">Shorten it!</Button>
      </div>
    </>
  );
}
