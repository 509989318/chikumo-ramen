// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'ja-jp',
    locales: ['ja-jp', 'zh-tw', 'en-us'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
