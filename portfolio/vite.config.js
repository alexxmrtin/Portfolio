import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // En producción (GitHub Pages) la web vive en /Portfolio/.
  // En desarrollo se sirve desde la raíz.
  if (command === 'build') {
    return {
      base: '/Portfolio/',
      plugins: [react()],
      server: {
        port: 5174,
        strictPort: true,
      },
    }
  }

  return {
    base: '/',
    plugins: [react()],
    server: {
      port: 5174,
      strictPort: true,
    },
  }
})
