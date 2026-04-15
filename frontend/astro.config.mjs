import { defineConfig } from "astro/config";
import favicons from "astro-favicons";
import node from "@astrojs/node";

export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  integrations: [favicons()],
});
