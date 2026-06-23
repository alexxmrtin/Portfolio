import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero({ t }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          {t.hero.available}
        </p>

        <h1 className={styles.name}>
          {t.hero.name}
          <span className={styles.period}>.</span>
        </h1>

        <p className={styles.role}>{t.hero.role}</p>
        <p className={styles.summary}>{t.hero.summary}</p>

        <div className={styles.actions}>
          <button className={styles.cta} onClick={() => scrollTo("projects")}>
            {t.hero.cta}
            <span className={styles.arrow}>↓</span>
          </button>
          <Link to="/about" className={styles.secondary}>
            {t.hero.secondary}
            <span className={styles.arrowR}>→</span>
          </Link>
        </div>
      </div>

      <div className={styles.meta} aria-hidden="true">
        <span>{t.hero.location}</span>
        <span className={styles.metaLine} />
        <span>{t.hero.role}</span>
      </div>
    </section>
  );
}
