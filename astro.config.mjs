// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://touhou-records.vercel.app",

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          es: "es",
        },
      },
    }),
  ],
});
