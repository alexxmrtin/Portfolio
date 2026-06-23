import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { translations } from "./i18n";
import "./index.css";

export default function App() {
  const [lang, setLang] = useState("es");
  const t = translations[lang];

  return (
    <BrowserRouter>
      <Header
        lang={lang}
        onLangToggle={() => setLang((l) => (l === "en" ? "es" : "en"))}
        t={t}
      />
      <Routes>
        <Route path="/" element={<HomePage lang={lang} t={t} />} />
        <Route path="/about" element={<AboutPage t={t} />} />
      </Routes>
      <Footer t={t} />
    </BrowserRouter>
  );
}
