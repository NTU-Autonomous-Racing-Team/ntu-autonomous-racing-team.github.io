// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Static multi-page site served from the GitHub Pages org root
// (https://ntudeepspeed.github.io) — no base path needed.
export default defineConfig({
  site: "https://ntudeepspeed.github.io",
  integrations: [sitemap()],
  // Pit notes moved to <year>-<event> slugs. Only these two were ever deployed under
  // their old URLs, so only these need to keep resolving.
  redirects: {
    "/pit-notes/racing-the-full-stack-at-icra-2026/": "/pit-notes/2026-icra/",
  },
});
