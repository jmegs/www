import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { FontaineTransform } from "fontaine";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), icon()],
  vite: {
    plugins: [FontaineTransform.vite({
      fallbacks: ["Arial"],
      resolvePath: id => new URL(`./public${id}`, import.meta.url)
    })]
  }
});