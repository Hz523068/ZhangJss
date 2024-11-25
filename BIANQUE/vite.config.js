import { defineConfig } from 'vite'

export default defineConfig({
  base: '/ZhangJsss/扁鹊/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
}) 