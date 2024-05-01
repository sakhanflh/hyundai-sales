/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'creamy' : '#fffbe7',
        'red' : '#cc0000',
        'abu' : '#625e62',
        'midnight' : '#2c2c2c',
        'titan' : '#828788',
      },
    },
  },
  plugins: [],
}

