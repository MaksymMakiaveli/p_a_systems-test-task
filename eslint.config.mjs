// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

import NuxtEslintConfig from '@nuxt/eslint-config';
import PluginPrettier from 'eslint-plugin-prettier';
import PluginVue from 'eslint-plugin-vue';

export default withNuxt({
  plugins: {
    prettier: PluginPrettier,
    vue: PluginVue,
  },
})
  .prepend({ ...NuxtEslintConfig })
  .prepend({
    rules: {
      // Basic rules
      'no-console': 'warn',
      'prettier/prettier': 'error',

      // Vue rules
      'vue/no-unused-properties': [
        'error',
        {
          groups: ['props', 'data', 'computed', 'methods', 'setup'],
          ignorePublicMembers: true,
        },
      ],
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': 'off',

      // Typescript rules
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  });
