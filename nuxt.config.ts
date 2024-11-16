// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', // Tailwind CSS module
  ],
  app: {
    head: {
      title: 'NUXT @16alves02',
      meta: [
        { name: 'description', content: 'NUXT 3 :)' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },

  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
    apiBase: process.env.API_BASE_URL || 'http://127.0.0.1:8000', // Fixed comma here
  },

  hooks: {
    'ready': () => {
      console.log('Currency API Key:', process.env.CURRENCY_API_KEY)
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {}, // Enable Tailwind CSS
      autoprefixer: {}, // Enable Autoprefixer
    },
  },
});
