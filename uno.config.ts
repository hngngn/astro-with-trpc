import { defineConfig, presetUno, presetWebFonts } from "unocss"
import presetAutoprefixer from "unocss-preset-autoprefixer"

export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            fonts: {
                sans: {
                    name: "Inter",
                    italic: false,
                    provider: "bunny",
                    weights: [400, 500, 600, 700],
                },
            },
        }),
        presetAutoprefixer(),
    ],
})
