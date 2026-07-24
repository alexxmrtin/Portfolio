import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header({ lang, onLangToggle, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={() => scrollTo("home")}>
          alejandro<span className={styles.logoAccent}>.martin</span>
        </button>

        <div className={styles.actions}>
          <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
            <button onClick={() => scrollTo("home")}>{t.nav.home}</button>
            <button onClick={() => scrollTo("projects")}>{t.projects.title}</button>
          </nav>
          <button className={styles.langBtn} onClick={onLangToggle}>
            {lang === "en" ? "ES" : "EN"}
          </button>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
