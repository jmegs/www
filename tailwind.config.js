/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./layouts/**/*.html"],
	theme: {
		colors: {
			canvas: 'hsl(var(--canvas) / <alpha-value>)',
			text: 'hsl(var(--text) / <alpha-value>)',
			surface1: 'hsl(var(--text) / 5%)',
			surface2: 'hsl(var(--text)/ 10%)',
		},
		borderRadius: {
			1: '5px'
		},
		extend: {
			maxWidth: {
				measure: '69ch'
			}
		}
	},
}
