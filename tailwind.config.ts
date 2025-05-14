import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#baddfe',
          300: '#81c3fd',
          400: '#3fa2fa',
          500: '#1a87eb',
          600: '#0c6cd0',
          700: '#0c57a9',
          800: '#104b8a',
          900: '#134071',
          950: '#0e2a4c',
        },
        // Alfred Colors from Figma
        alfred: {
          primary: '#132B39', // Dark blue primary
          secondary: '#475F6B', // Hover state
          disabled: '#B9C5C9', // Disabled state
          light: '#EEF7FC', // Light text on dark bg
          border: '#DFE3E7', // Border/stroke color
          background: '#F4F5F5', // Light background
          muted: '#DFE3E7', // Muted text/elements
        },
        holiday: {
          primary: '#27DCCA', // Holiday market teal
          secondary: '#227D73', // Holiday market dark teal
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      fontSize: {
        // From Figma - Inter font with 600 weight, -2% letter spacing
        button: [
          '16px',
          {
            lineHeight: '1.25em',
            fontWeight: '600',
            letterSpacing: '-0.02em',
          },
        ],
      },
      borderRadius: {
        button: '30px',
        card: '24px',
        nav: '32px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-in-out',
        'fade-out': 'fade-out 0.2s ease-in-out',
      },
    },
  },
  plugins: [],
}

export default config
