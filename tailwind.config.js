module.exports = {
  corePlugins: {},
  purge: [
    "./app/**/*.html",
    "./app/helpers/**/*.rb",
    "./app/views/**/*.html.erb",
    "./app/**/*.{js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        gray: ["1px solid #dddddd"],
      },
      colors: {
        signbtn: '#74B666',
        gray: {
          lightest_xs: "#f8f8f8",
          lightest_s: "#6e6e6e",
          lightest: "#444444",
          lightt: '#686868',
          light: "#969696",
          rackmd: "#333333",
          dark: "#262626",
          deep: "#222222",
          deepest: "#1e1e1e",
        },
        white: "#ffffff",
        green: "#14c053",
        primary: "",
        secondary: "",
        editor: "#1d2127",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
