/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/*.tsx",
    "./src/components/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          200: '#C4C4CC',
          900: '3121214'
        },
        'green': {
          500: '#015F43'
        }
      }
    },
  },
  plugins: [],
}

