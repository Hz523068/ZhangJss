import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ZhangJss/BIANQUE/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
}) 