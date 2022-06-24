import Button from "./Button";

import styles from "../styles/BoostLinksSection.module.css";

export default function BoostLinksSection() {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.heading}>Boost your links today</h3>
      <Button style="primary">Get started</Button>
    </section>
  );
}
