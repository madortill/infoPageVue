



import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

import { VitePWA } from 'vite-plugin-pwa';


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // 'vue': '@vue/compat',
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue({}),
    VitePWA({
      includeAssets: ['/*.png', '/bg/*'],
      // Optional configuration options for VitePWA
    }),
  ],
  base: process.env.NODE_ENV === "production" ? "/infoPageVue/" : "/",

})
