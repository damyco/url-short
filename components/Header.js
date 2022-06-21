import Link from "next/link";

import Button from "./Button";

import styles from "../styles/Header.module.css";
import btnStyles from "../styles/Button.module.css";

const links = [
  { id: 1, url: "/", text: "Features" },
  { id: 2, url: "/", text: "Pricing" },
  { id: 3, url: "/", text: "Features" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/">
            <a>
              <img className={styles.logo} src="/logo.svg" alt="logo" />
            </a>
          </Link>

          <ul>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link href={link.url}>
                    <a>{link.text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div>
          <Button style={btnStyles.secondary}>Login</Button>
          <Button style={btnStyles.primary}>Sign up</Button>
        </div>
      </div>
    </header>
  );
}
