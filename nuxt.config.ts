import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/fonts"],
	css: ["~/assets/css/globals.css"],

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

	features: {
		noScripts: true,
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
