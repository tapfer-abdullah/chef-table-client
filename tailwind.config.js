/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-banner-bg': "url('./public/banner/biriyani-banner.jpg')",
        'my-banner-details-0': "url('./public/banner/banner0.jpg')",
        'my-banner-details-1': "url('./public/banner/banner1.jpg')",
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      "black": "#000",
      "my-primary": "#c6a87d",
      "my-gray" : "#13181c",
      "warning": "color: rgb(217 119 6)",
      "danger" : "#ff0000"
    },
  },
  plugins: [require("daisyui")],
}

