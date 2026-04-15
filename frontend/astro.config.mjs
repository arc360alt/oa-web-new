import { defineConfig } from "astro/config";
import favicons from "astro-favicons";
import node from "@astrojs/node";

export default defineConfig({
  adapter: node({ mode: "standalone" }),
  integrations: [favicons()],
});
