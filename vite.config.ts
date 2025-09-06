import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// Use relative asset paths for production so the site works on GitHub Pages
// while keeping the root path during local development.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? './' : '/',
  // Ensure the dev server runs on port 3000 to match local development
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}))
