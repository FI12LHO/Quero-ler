/** @type { import('tailwindcss').Config } */
module.exports = {
  content: [
    './src/**/*.tsx',
    './public/index.html'
  ],
  theme: {
    extend: {
      "backgroundImage": {
        learning: "url('images/background.png')"
      }
    },
    fontFamily: {
      'title': ['Inter', 'sans-serif'],
      'sans': ['Roboto', 'sans-serif']
    },
    boxShadow: {
      'input': '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
      'button': '0px 4px 4px rgba(0, 0, 0, 0.10)',
      'press': '0px 8px 8px rgba(0, 0, 0, 0.25)'
    }
  },
  plugins: [],
}