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
        'midnight-black-pearl' : '#141414',
        'creamy-white-pearl' : '#C9CBCD',
        'dragon-red-pearl' : '#951E1F',
        'titan-gray-metallic' : '#929197',
        'magnetic-silver-metallic' : '#A8A9AE',
        'optic-white' : '#94989B',
        'abyss-black-pearl' : '#101010',
        'glacier-white-metallic' : '#B8BDC3',
        'lagoon-blue-pearl' : '#26282F',
        'typhoon-silver-metallic' : '#66696F',
        'moonlight-blue-pearl' : '#222D3D',
        'shimmering-silver-metallic' : '#959191',
        'graphite-gray-metallic' : '#1D1F28',
        'gravity-gold-matte' : '#646159',
        'silver-metallic' : '#C0C0C0',
        'magnetic-gray-metallic' : '#2F2F2F',
      },
    },
  },
  plugins: [],
}

