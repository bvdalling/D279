// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/public/core.css',
  ],
  ssr: false,
  router:
  {
    options: {
      hashMode: true,
    }
  },
})
