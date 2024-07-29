import { defineConfig } from "astro/config"
import { FontaineTransform } from "fontaine"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import { getLatestCommitHash } from "./src/utils/git"

const fontaineOptions = {
  fallbacks: ["system-ui", "sans-serif"],
  resolvePath: (id) => `file:///public/fonts/${id}`,
}

function gitHashIntegration() {
  return {
    name: "git-hash-integration",
    hooks: {
      "astro:config:setup": ({ updateConfig }) => {
        const commitHash = getLatestCommitHash()
        updateConfig({
          vite: {
            define: {
              "import.meta.env.COMMIT_HASH": JSON.stringify(commitHash),
            },
          },
        })
      },
    },
  }
}

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [FontaineTransform.vite(fontaineOptions)],
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    gitHashIntegration(),
  ],
})
