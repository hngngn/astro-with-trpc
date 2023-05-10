import vercel from "@astrojs/vercel/serverless"
import { defineConfig } from "astro/config"
import auth from "auth-astro"
import unocss from "unocss/astro"

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: vercel(),
    integrations: [
        unocss({
            injectReset: "@unocss/reset/tailwind-compat.css",
        }),
        auth(),
    ],
    vite: {
        optimizeDeps: { exclude: ["auth:config"] },
    },
})
