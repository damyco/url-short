import Button from "./Button";
import Link from "next/link";
import styles from "../styles/ShortLink.module.css";

export default function ShortLink() {
  return (
    <div className={styles.container}>
      <p>url</p>
      <Link href="/">
        <a>shortened link</a>
      </Link>

      <Button style="primary">Copy</Button>
    </div>
  );
}
