module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ["Quicksand"],
        'heading': ["Maven Pro"]
      },
      textColor: {
        'kwone': '#ff5100',
        'kwtwo': '#0084ff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
