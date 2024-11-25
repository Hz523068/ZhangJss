import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ZhangJss/',
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