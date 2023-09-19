import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  
      fontFamily: {
        mono: ['var(--font-berkeley)'],
        display: ['var(--font-gtl)']
      },
      colors: {
        canvas: 'hsl(var(--color-canvas) / <alpha-value>)',
        wash: 'hsl(var(--color-wash) / <alpha-value>)',
        foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
      }
  },
  plugins: [],
}
export default config
