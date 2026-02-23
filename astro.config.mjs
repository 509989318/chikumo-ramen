// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'ja-jp',
    locales: ['ja-jp', 'zh-tw', 'en-us'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
