// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/public/core.css',
  ],
  router:
  {
    options: {
      hashMode: true,
    }
  },
})
