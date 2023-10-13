import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        accent: {
          DEFAULT: 'rgb(var(--app-accent-default) / <alpha-value>)',
          100: 'rgb(var(--app-accent-100) / <alpha-value>)',
          200: 'rgb(var(--app-accent-200) / <alpha-value>)',
          300: 'rgb(var(--app-accent-300) / <alpha-value>)',
          400: 'rgb(var(--app-accent-400) / <alpha-value>)',
        },
        gray: {
          DEFAULT: 'rgb(var(--app-gray-default) / <alpha-value>)',
          50: 'rgb(var(--app-gray-50) / <alpha-value>)',
          100: 'rgb(var(--app-gray-100) / <alpha-value>)',
          200: 'rgb(var(--app-gray-200) / <alpha-value>)',
          600: 'rgb(var(--app-gray-600) / <alpha-value>)',
          700: 'rgb(var(--app-gray-700) / <alpha-value>)',
          900: 'rgb(var(--app-gray-900) / <alpha-value>)',
        },
        'dark-green': "#386261",
      }
    },
  },
  plugins: [],
}
export default config
