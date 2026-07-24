import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import styles from "./Projects.module.css";

export default function Projects({ lang, t }) {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className="kicker">{t.projects.label}</p>
          <h2 className={styles.title}>{t.projects.title}</h2>
        </header>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 1}
              lang={lang}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
