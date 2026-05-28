import { defineConfig } from 'vite'

export default defineConfig({
  base: '/atlas-hub-presentation/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html'
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
