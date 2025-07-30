// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: "always",
	},
	experimental: {
		responsiveImages: true,
		fonts: [
			{
				name: "Degular Variable",
				provider: fontProviders.adobe({ id: "tvi2kjb" }),
				cssVariable: "--font-degular-variable",
			},
		],
	}
});
