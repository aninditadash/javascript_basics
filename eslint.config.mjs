import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // global ignores
  {
    ignores: ['dist/**', 'node_modules/**', 'bin/**', 'build/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    ignores: ['**/mocks/*.js'],
    rules: {
      semi: 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      quotes: ['error', 'single'],
      'no-undef': 'off',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['*.ts'],
    ignores: ['**/mocks/*.ts'],
    rules: {
      'prefer-const': 'error',
    },
  },
]);
