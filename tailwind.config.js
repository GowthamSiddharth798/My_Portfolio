/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#dcdffc',
          200: '#bacbfa',
          300: '#92aaf6',
          400: '#6a81ef',
          500: '#3454D1', // primary
          600: '#2c3fb8',
          700: '#283195',
          800: '#232879',
          900: '#1f2252',
          950: '#131338',
        },
        secondary: {
          50: '#f4f8fa',
          100: '#e2eef3',
          200: '#c7dfea',
          300: '#9cc7db',
          400: '#6ea7c7',
          500: '#4088b2',
          600: '#326d95',
          700: '#2a5979',
          800: '#264a63',
          900: '#234055',
        },
        accent: {
          50: '#fff8eb',
          100: '#ffecc6',
          200: '#ffd988',
          300: '#ffc14a',
          400: '#ffaa1d',
          500: '#FF9D00', // accent
          600: '#e17e00',
          700: '#b85d04',
          800: '#94480b',
          900: '#793c0e',
          950: '#461e00',
        },
        success: '#22c55e',
        warning: '#f97316',
        error: '#ef4444',
      },
      fontFamily: {
        sans: [
          'Inter',
          'SF Pro Display',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};