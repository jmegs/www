/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./layouts/**/*.html"],
	theme: {
		colors: {
			primary: "hsl(var(--color-primary) / <alpha-value>)",
			background: "hsl(var(--color-background) / <alpha-value>)"
		},
		fontFamily: {
			mono: ['"Berkeley Mono"', "ui-monospace", "monospace"]
		},
		extend: {
			maxWidth: {
				measure: "60ch"
			}
		}
	},
	plugins: [require("@tailwindcss/typography")]
}
