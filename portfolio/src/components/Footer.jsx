import styles from "./Footer.module.css";

export default function Footer({ t }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          {t.footer.copy} · {new Date().getFullYear()}
        </p>
        <button
          className={styles.top}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {t.footer.backToTop}
          <span className={styles.arrow}>↑</span>
        </button>
      </div>
    </footer>
  );
}
