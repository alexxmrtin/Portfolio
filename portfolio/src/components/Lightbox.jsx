import { useEffect, useCallback } from "react";
import styles from "./Lightbox.module.css";

export default function Lightbox({ images, index, title, onClose, onNavigate, t }) {
  const total = images.length;

  const prev = useCallback(
    () => onNavigate((index - 1 + total) % total),
    [index, total, onNavigate]
  );
  const next = useCallback(
    () => onNavigate((index + 1) % total),
    [index, total, onNavigate]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.top} onClick={(e) => e.stopPropagation()}>
        <span className={styles.title}>{title}</span>
        <span className={styles.counter}>
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button
          className={styles.close}
          onClick={onClose}
          aria-label={t.projects.close}
        >
          ✕
        </button>
      </div>

      <div className={styles.stage} onClick={(e) => e.stopPropagation()}>
        {total > 1 && (
          <button
            className={`${styles.nav} ${styles.navPrev}`}
            onClick={prev}
            aria-label="Prev"
          >
            ‹
          </button>
        )}

        <img
          src={images[index]}
          alt={`${title} ${index + 1}`}
          className={styles.image}
        />

        {total > 1 && (
          <button
            className={`${styles.nav} ${styles.navNext}`}
            onClick={next}
            aria-label="Next"
          >
            ›
          </button>
        )}
      </div>

      {total > 1 && (
        <div className={styles.thumbs} onClick={(e) => e.stopPropagation()}>
          {images.map((src, i) => (
            <button
              key={src + i}
              className={`${styles.thumb} ${i === index ? styles.thumbActive : ""}`}
              onClick={() => onNavigate(i)}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
