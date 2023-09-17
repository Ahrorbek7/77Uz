// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: [
    'bootstrap-icons/font/bootstrap-icons.css'
  ],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/eslint-module',
  ],
  plugins: [
    { src: '@/plugins/element-plus.js', mode: 'client' }
  ],
  ssr: true,
  nitro: {
    baseURL: "http://localhost:8000",
    prerender: {
      crawlLinks: true,
      failOnError: false, 
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
