import { defineConfig } from "astro/config";
import favicons from "astro-favicons";

export default defineConfig({
  integrations: [favicons()],
});
