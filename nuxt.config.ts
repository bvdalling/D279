// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/public/core.css',
  ],
  app: {
    baseURL: '',
    buildAssetsDir: 'assets'
  },
  router:
  {
    options: {
      hashMode: true,
    }
  },
})
