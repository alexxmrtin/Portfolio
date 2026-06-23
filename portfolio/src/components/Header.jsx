import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header({ lang, onLangToggle, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goHome = () => {
    if (location.pathname === "/") {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <button className={styles.logo} onClick={goHome}>
          alejandro<span className={styles.logoAccent}>.martin</span>
        </button>

        <div className={styles.actions}>
          <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
            <button onClick={goHome}>{t.nav.home}</button>
            <Link
              to="/about"
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.about}
            </Link>
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
