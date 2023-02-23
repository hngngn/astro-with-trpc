import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import unocss from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [unocss()],
});
