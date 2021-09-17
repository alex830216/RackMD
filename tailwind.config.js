module.exports = {
  corePlugins: {
  },
  purge: {
    enable: false
  }
  ,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          lightest: '#444444',
          light: '#969696',
          DEFAULT: '#333333',
          dark: '#262626',
        },
        white: '#ffffff',
        green: '#14c053',
        primary: '',
        secondary: '',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}