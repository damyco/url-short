import { useEffect, useState } from "react";

import Link from "next/link";

import Button from "./Button";

import styles from "../styles/Header.module.css";

const links = [
  { id: 1, url: "/", text: "Features" },
  { id: 2, url: "/", text: "Pricing" },
  { id: 3, url: "/", text: "Features" },
];

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header className={`${styles.header} ${scroll ? styles.scroll : ""}`}>
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
          <Button style="secondary">Login</Button>
          <Button style="primary">Sign up</Button>
        </div>
      </div>
    </header>
  );
}
