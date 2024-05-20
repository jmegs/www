import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"TASA Orbiter",
					"TASA Orbiter override",
					...defaultTheme.fontFamily.sans
				]
			},
			colors: {
				gray: {
					1: "hsl(var(--gray-1-hsl) / <alpha-value>)",
					2: "hsl(var(--gray-2-hsl) / <alpha-value>)",
					3: "hsl(var(--gray-3-hsl) / <alpha-value>)",
					4: "hsl(var(--gray-4-hsl) / <alpha-value>)",
					5: "hsl(var(--gray-5-hsl) / <alpha-value>)",
					6: "hsl(var(--gray-6-hsl) / <alpha-value>)",
					7: "hsl(var(--gray-7-hsl) / <alpha-value>)",
					8: "hsl(var(--gray-8-hsl) / <alpha-value>)",
					9: "hsl(var(--gray-9-hsl) / <alpha-value>)",
					10: "hsl(var(--gray-10-hsl) / <alpha-value>)",
					11: "hsl(var(--gray-11-hsl) / <alpha-value>)",
					12: "hsl(var(--gray-12-hsl) / <alpha-value>)"
				}
			}
		}
	},
	plugins: []
}
