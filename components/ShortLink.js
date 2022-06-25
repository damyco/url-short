import Button from "./Button";
import Link from "next/link";
import styles from "../styles/ShortLink.module.css";

export default function ShortLink({ originalLink, shortLink }) {
  return (
    <div className={styles.container}>
      <p>{originalLink}</p>
      <Link href={shortLink}>
        <a>{shortLink}</a>
      </Link>

      <Button style="primary">Copy</Button>
    </div>
  );
}
