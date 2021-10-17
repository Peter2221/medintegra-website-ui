module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#00DAFE",
          dark: "#0033FF"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
