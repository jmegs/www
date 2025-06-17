// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	experimental: {
		responsiveImages: true,
		fonts: [
			{
				provider: "local",
				name: "Bureau Serif",
				cssVariable: "--font-bureau-serif",
				variants: [
					{
						weight: 400,
						style: "normal",
						src: ["./src/assets/STKBureauSerif-Book.woff2"],
					},
				],
			},
		],
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
