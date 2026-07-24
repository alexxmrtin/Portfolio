import { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { aboutData } from "../data/about";

const icons = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
};

export default function Hero({ t }) {
  const [emailOpen, setEmailOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const emailRef = useRef(null);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const handleClick = (e) => {
      if (emailRef.current && !emailRef.current.contains(e.target)) {
        setEmailOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(aboutData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
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

          <div className={styles.socials}>
            {aboutData.socials.map((s) =>
              s.id === "email" ? (
                <div key="email" className={styles.emailWrapper} ref={emailRef}>
                  <button
                    className={`${styles.socialBtn} ${emailOpen ? styles.socialBtnActive : ""}`}
                    aria-label={s.label}
                    title={s.label}
                    onClick={() => setEmailOpen((v) => !v)}
                  >
                    {icons.email}
                  </button>
                  {emailOpen && (
                    <div className={styles.emailPanel}>
                      <span className={styles.emailAddress}>{aboutData.email}</span>
                      <button className={styles.copyBtn} onClick={copyEmail}>
                        {copied ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                            <rect x="9" y="9" width="13" height="13" rx="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label={s.label}
                  title={s.label}
                >
                  {icons[s.id]}
                </a>
              )
            )}
          </div>
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
