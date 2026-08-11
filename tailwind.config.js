/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "söhne": ["SÖHNE","sans-serif"],
        "söhneMono": ["SÖHNEMONO","sans-serif"],
      },
      spacing: {
        "99": "1500px",
        "a": "60px",
        "b": "300px",
        "hs": "100vh",
        "new": "9999px",
      },
    },
  },
  variants: {},
  plugins: [
    function ({addUtilities}) {
        const extendUnderline = {
            '.underline': {
                'textDecoration': 'underline',
                'text-decoration-color': '#b8b9b9',
            },
        }
        addUtilities(extendUnderline)
    },
    function ({addUtilities}) {
      const secondUnderline = {
          '.underline_second': {
              'textDecoration': 'underline',
              'text-decoration-color': 'black',
              "text-underline-offset": "6px",
              "text-decoration-thickness": "1px",
          },
      }
      addUtilities(secondUnderline)
  },
  function ({addUtilities}) {
    const thirdUnderline = {
        '.underline_third': {
            'textDecoration': 'underline',
            'text-decoration-color': 'black',
        },
    }
    addUtilities(thirdUnderline)
},
],
}

