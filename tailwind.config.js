const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['layouts/**/*.html', 'content/**/*.md'],
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      mono: ["Berkeley Mono", "monospace"]
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      hiContrast: "hsl(var(--hiContrast))",
      loContrast: "hsl(var(--loContrast))",
      accent: "hsl(var(--accent) / <alpha-value>)",
      surface: {
        0: "hsl(var(--surface-0) / <alpha-value>)",
        1: "hsl(var(--surface-1) / <alpha-value>)",
        2: "hsl(var(--surface-2) / <alpha-value>)",
        3: "hsl(var(--surface-3) / <alpha-value>)",
      }
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.hiContrast'),
            '--tw-prose-headings': theme('colors.hiContrast'),
            '--tw-prose-lead': theme('colors.hiContrast'),
            '--tw-prose-links': theme('colors.hiContrast'),
            '--tw-prose-bold': theme('colors.hiContrast'),
            '--tw-prose-counters': theme('colors.loContrast'),
            '--tw-prose-bullets': theme('colors.loContrast'),
            '--tw-prose-hr': theme('colors.surface.2'),
            '--tw-prose-quotes': theme('colors.hiContrast'),
            '--tw-prose-quote-borders': theme('colors.surface.2'),
            '--tw-prose-captions': theme('colors.loContrast'),
            '--tw-prose-code': theme('colors.hiContrast'),
            '--tw-prose-pre-code': theme('colors.hiContrast'),
            '--tw-prose-pre-bg': theme('colors.surface.1'),
            '--tw-prose-th-borders': theme('colors.loContrast'),
            '--tw-prose-td-borders': theme('colors.loContrast'),
            lineHeight: 1.5,
            letterSpacing: '-0.011em'
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
