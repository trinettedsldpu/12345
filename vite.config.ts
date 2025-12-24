import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Sets the base path for assets to be relative. 
  // This is crucial for GitHub Pages deployments (e.g. https://user.github.io/repo/).
  base: './',
  server: {
    host: true
  },
  build: {
    chunkSizeWarningLimit: 1000
  }
})