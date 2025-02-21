/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef8f4',
          100: '#fdeee4',
          200: '#fbd7c0',
          300: '#f8b88d',
          400: '#f58d4e',
          500: '#f27127',
          600: '#e65818',
          700: '#bf4516',
          800: '#983a19',
          900: '#7a3318',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dae7',
          300: '#a9bbd3',
          400: '#7895bc',
          500: '#5577a5',
          600: '#435f89',
          700: '#384e6f',
          800: '#31425c',
          900: '#2c394f',
        },
        accent: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c5cdc5',
          300: '#9daa9d',
          400: '#738573',
          500: '#576b57',
          600: '#445644',
          700: '#384538',
          800: '#2f382f',
          900: '#282e28',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};