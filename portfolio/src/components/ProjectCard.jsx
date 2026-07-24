import { useState } from "react";
import Lightbox from "./Lightbox";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, index, lang, t }) {
  const hasLink = Boolean(project.link);
  const images = project.images || [];
  const hasImages = images.length > 0;

  const [lightbox, setLightbox] = useState(-1); // -1 = closed, else image index

  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <div className={styles.top}>
          <span className={styles.index}>
            {String(index).padStart(2, "0")}
          </span>
          {project.type && (
            <span className={styles.type}>{project.type[lang]}</span>
          )}
        </div>

        <h3 className={styles.title}>{project.name[lang]}</h3>

        <div className={styles.description}>
          {[project.description[lang]].flat().map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.footer}>
          {hasLink ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {t.projects.viewProject}
              <span className={styles.linkArrow}>→</span>
            </a>
          ) : (
            <span className={styles.private}>
              <span className={styles.lock} aria-hidden="true">●</span>
              {t.projects.private}
            </span>
          )}
        </div>
      </div>

      <div className={styles.media}>
        {hasImages ? (
          <button
            className={styles.preview}
            onClick={() => setLightbox(0)}
            aria-label={t.projects.preview}
          >
            <img src={images[0]} alt={project.name[lang]} />
            <span className={styles.previewOverlay}>
              <span className={styles.expandIcon} aria-hidden="true">⤢</span>
              <span className={styles.previewLabel}>{t.projects.preview}</span>
            </span>
            {images.length > 1 && (
              <span className={styles.count}>+{images.length - 1}</span>
            )}
          </button>
        ) : (
          <div className={styles.noPreview}>
            <span aria-hidden="true">◍</span>
            {t.projects.noPreview}
          </div>
        )}
      </div>

      {lightbox >= 0 && (
        <Lightbox
          images={images}
          index={lightbox}
          title={project.name[lang]}
          onClose={() => setLightbox(-1)}
          onNavigate={setLightbox}
          t={t}
        />
      )}
    </article>
  );
}
