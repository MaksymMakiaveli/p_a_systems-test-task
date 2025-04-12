import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],

  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },

  imports: {
    autoImport: false,
  },

  typescript: {
    typeCheck: true,

    strict: true,
  },

  appDir: './src/app',

  srcDir: 'src/',

  css: ['~/assets/styles/main.css'],

  alias: {
    '$features/*': './src/features/*',
    '$shared/*': './src/shared/*',
    '$widgets/*': './src/widgets/*',
    '$app/*': './src/app/*',
    '$entities/*': './src/entities/*',
    '$kernel/*': './src/kernel/*',
    '$assets/*': './src/assets/*',
  },
});
