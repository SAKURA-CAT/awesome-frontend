import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-micro-app',
  server: {
    host: '0.0.0.0',
    port: 3002
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 3002
  },
  build: {
    assetsDir: 'vue-micro-app-assets'
  }
})
