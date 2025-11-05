import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-10-27",
	css: ["~/assets/css/style.css"],
	devtools: { enabled: true },
	features: {
		noScripts: "production",
	},
	modules: ["nitro-cloudflare-dev", "@nuxt/fonts", "@nuxt/scripts"],
	nitro: {
		preset: "cloudflare_module",
		cloudflare: {
			deployConfig: true,
			nodeCompat: true,
			wrangler: {
				name: "johnmeguerian-dot-com",
			},
		},
	},
	$production: {
		scripts: {
			registry: {
				fathomAnalytics: {
					site: "TVQPDWBA",
				},
			},
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
