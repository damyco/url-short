import styles from "../styles/Button.module.css";

export default function Button({ style, handler, children }) {
  let myClass = `${styles.btn} `;

  if (style === "primary") {
    myClass += styles.primary;
  } else if (style === "secondary") {
    myClass += styles.secondary;
  }

  return (
    <button className={myClass} onClick={handler}>
      {children}
    </button>
  );
}
