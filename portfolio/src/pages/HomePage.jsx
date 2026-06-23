import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function HomePage({ lang, t }) {
  return (
    <main>
      <Hero t={t} />
      <Projects lang={lang} t={t} />
    </main>
  );
}
