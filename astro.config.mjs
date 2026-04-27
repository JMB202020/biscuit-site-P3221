import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/P3221',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
