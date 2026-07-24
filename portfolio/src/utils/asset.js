// Resuelve rutas de `public/` contra el base de Vite ("/" en dev, "/Portfolio/" en
// GitHub Pages). Vite reescribe los assets de index.html y los import, pero no las
// rutas escritas como texto en el JS, así que estas hay que construirlas a mano.
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
