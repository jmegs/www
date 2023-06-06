/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./layouts/**/*.html"],
	darkMode: "media",
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
}
