// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/public/core.css',
  ],
  app:{
    baseURL: 'https://bvdalling.github.io/D279/'
  },
  vite: {
    base: '/D279/'
  },
  ssr: false,
  router:
  {
    options: {
      hashMode: true,
    }
  },
})
