import styles from "../styles/StatisticsSection.module.css";

export default function StatisticsSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img src="/icon-brand-recognition.svg" alt="" />
            </div>
            <h6>Brand Recognition</h6>
            <p>
              Boost your brand recognition with each click. Generic links
              don&apos;t mean a thing. Branded links help instil confidence in
              your content.
            </p>
          </div>
          <div className={styles.card}>
            <img src="" alt="" />{" "}
            <div className={styles.icon}>
              <img src="/icon-brand-recognition.svg" alt="" />
            </div>{" "}
            <h6>Detailed Records</h6>
            <p>
              Boost your brand recognition with each click. Generic links
              don&apos;t mean a thing. Branded links help instil confidence in
              your content.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img src="/icon-brand-recognition.svg" alt="" />
            </div>
            <h6>Fully Customizable</h6>
            <p>
              Boost your brand recognition with each click. Generic links
              don&apos;t mean a thing. Branded links help instil confidence in
              your content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
