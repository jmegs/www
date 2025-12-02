import { defineConfig } from "vite"
import { redwood } from "rwsdk/vite"
import { cloudflare } from "@cloudflare/vite-plugin"
import tailwind from "@tailwindcss/vite"

export default defineConfig({
	environments: { ssr: {} },
	plugins: [
		cloudflare({
			viteEnvironment: { name: "worker" },
		}),
		redwood(),
		tailwind(),
	],
})
