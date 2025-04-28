import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'app/',
  devtools: { enabled: true },
  modules: ["nuxt-electron", "@nuxt/ui"],
  css: ['~/assets/css/main.css'],
  electron: {
    build: [
      {
        entry: 'electron/main.ts'
      },
      {
        entry: 'electron/preload.ts',
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
          // instead of restarting the entire Electron App.
          options.reload()
        },
      },
    ],
    disableDefaultOptions: true,
  },
})
