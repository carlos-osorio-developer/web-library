module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      './*.html',
      './assets/js/*.js',
    ],
  },
  darkMode: false, // or 'media' or 'class
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
