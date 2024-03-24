import db from '@astrojs/db';
import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [db()],
  output: "hybrid",
  adapter: netlify({
    edgeMiddleware: true
  }),
});
