import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/fonts", "@nuxt/scripts"],
	css: ["~/assets/css/globals.css"],

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
			meta: [
				{
					name: "description",
					content: "Design Manager, Brooklyn, NY",
				},
			],
		},
	},

	nitro: {
		static: true,
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
