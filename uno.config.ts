import { defineConfig, presetUno, presetWebFonts } from "unocss"

export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            provider: "fontshare",
            fonts: {
                sans: "Satoshi",
            },
        }),
    ],
})
