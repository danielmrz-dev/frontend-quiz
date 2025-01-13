/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'purple': '#A729F5',
      'dark-navy': '#313E51',
      'navy': '#3B4D66',
      'grey-navy': '#626C7F',
      'light-bluish': '#ABC1E1',
      'light-grey': '#F4F6FA',
      'white': '#ffffff',
      'tw-green': '#26D782',
      'tw-red': '#EE5454',
      'orange-opaque': '#FFF1E9',
      'green-opaque': '#E0FDEF',
      'blue-opaque': '#EBF0FF',
      'purple-opaque': '#F6E7FF',
    },
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
      rubikItalic: ['Rubik-Italic', 'sans-serif']
    }
  },
  plugins: [],
}

