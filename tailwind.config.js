/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6eeff',
          100: '#b3ccff',
          200: '#80aaff',
          300: '#4d88ff',
          400: '#1a66ff',
          500: '#1439c2',
          600: '#102d99',
          700: '#0c2170',
          800: '#081547',
          900: '#04091e',
        },
        accent: {
          cyan: '#06b6d4',
          purple: '#a855f7',
        },
      },
    },
  },
  plugins: [],
};
