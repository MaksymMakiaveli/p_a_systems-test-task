import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    'nuxt-svgo',
    '@nuxt/icon',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    'shadcn-nuxt',
    '@vueuse/nuxt',
  ],

  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['pinia'],
    },
    build: {
      rollupOptions: {
        output: {
          sanitizeFileName: true,
        },
      },
    },
  },

  imports: {
    autoImport: false,
  },

  shadcn: {
    prefix: '',

    componentDir: './src/shared/ui',
  },

  fonts: {
    families: [
      { name: 'Source Sans 3', provider: 'google' },
      { name: 'Kaushan Script', provider: 'google' },
    ],
  },

  svgo: {
    svgo: false,
    svgoConfig: {},
    defaultImport: 'component',
  },

  icon: {
    mode: 'css',
    cssLayer: 'base',
  },

  typescript: {
    typeCheck: true,

    strict: true,

    tsConfig: {
      include: ['./src/*', './src/types/*'],
    },
  },

  vue: {
    propsDestructure: true,
  },

  appDir: './src/app',

  srcDir: 'src/',

  css: ['~/assets/styles/main.css'],

  experimental: {
    renderJsonPayloads: false,
  },

  alias: {
    $widgets: resolve(__dirname, './src/widgets'),
    $features: resolve(__dirname, './src/features'),
    $entities: resolve(__dirname, './src/entities'),
    $shared: resolve(__dirname, './src/shared'),
    $assets: resolve(__dirname, './src/assets'),
    $kernel: resolve(__dirname, './src/kernel'),
  },
});
