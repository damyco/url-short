import styles from "../styles/Header.module.css";
import Link from "next/link";

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
              <img src="/logo.svg" alt="logo" />
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
          <button>Login</button>
          <button>Sign up</button>
        </div>
      </div>
    </header>
  );
}
