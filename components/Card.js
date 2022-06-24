import styles from "../styles/StatisticsSection.module.css";

export default function Card({ title, text, iconUrl }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <img src={iconUrl} alt={`${title} icon`} />
      </div>
      <h6>{title}</h6>
      <p>{text}</p>
    </div>
  );
}
