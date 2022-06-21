import styles from "../styles/Button.module.css";

export default function Button({ style, handler, children }) {
  const myClass = `${styles.btn} ${style}`;
  return (
    <button className={myClass} onClick={handler}>
      {children}
    </button>
  );
}
