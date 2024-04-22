/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          md: '2rem'
        }
      },
      fontFamily: {
        'sans': 'Inter, ui-sans-serif, sans-serif'
      }
    }
  },
  plugins: []
}

