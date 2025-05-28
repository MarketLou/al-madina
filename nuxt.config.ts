// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@pinia/nuxt'
  ],
  runtimeConfig: {
    public: {
      MEDUSA_REGION: 'reg_01JVRMTHPKP1GNACZH2TMVXPG0', // Updated to the correct region ID
      MEDUSA_BACKEND_URL: 'http://localhost:9000',
      MEDUSA_PUBLISHABLE_API_KEY: 'pk_59a7db2a8b74cbcfb68f0969577480d5914251476e93679f66220760e507c6b1'
    }
  },
  i18n: {
    langDir: 'locales',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        dir: 'ltr',
        file: 'en.json'
      },
      {
        code: 'ar',
        name: 'العربية',
        dir: 'rtl',
        file: 'ar.json'
      }
    ],
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  }
})
