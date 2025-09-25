import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/fonts", "@nuxt/scripts"],
	css: ["~/assets/css/globals.css"],

	features: {
		noScripts: true,
		inlineStyles: true,
	},

	scripts: {
		registry: {
			fathomAnalytics: {
				site: "TVQPDWBA",
			},
		},
	},

	app: {
		head: {
			title: "John Meguerian",
			htmlAttrs: {
				lang: "en",
			},
			meta: [
				{
					name: "description",
					content: "Design Manager, Brooklyn, NY",
				},
			],
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
