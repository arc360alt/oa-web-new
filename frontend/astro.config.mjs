import { defineConfig } from "astro/config";
import favicons from "astro-favicons";
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [favicons()],
});
