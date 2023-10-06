/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom_green: '#5CC7B2'
      },
      maxWidth: {
        '10rem': '10rem'
      }
    }
  },
  plugins: []
};
