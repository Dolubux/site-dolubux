/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontSize: {
      xs: [
        '.5rem',
        {
          letterSpacing: '0em',
          lineHeight: '.7rem',
        },
      ],
      sm: [
        '.7rem',
        {
          letterSpacing: '0em',
          lineHeight: '.9rem',
        },
      ],
      tiny: [
        '.875rem',
        {
          letterSpacing: '0em',
          lineHeight: '1.35rem',
        },
      ],
      base: [
        '.92rem',
        {
          letterSpacing: '0em',
          lineHeight: '1.35rem',
        },
      ],
      lg: [
        '1rem',
        {
          letterSpacing: '0em',
          lineHeight: '1.50rem',
        },
      ],
      xl: [
        '1.125rem',
        {
          letterSpacing: '0em',
          lineHeight: '1.50rem',
        },
      ],
      '2xl': [
        '1.25rem',
        {
          letterSpacing: '0em',
          lineHeight: '1.675rem',
        },
      ],
      '3xl': [
        '1.5rem',
        {
          letterSpacing: '0em',
          lineHeight: '1.875rem',
        },
      ],
      '4xl': [
        '1.875rem',
        {
          letterSpacing: '0em',
          lineHeight: '2rem',
        },
      ],
      '3nxl': [
        '2rem',
        {
          letterSpacing: '0em',
          lineHeight: '2.3rem',
        },
      ],
      '5xl': [
        '2.25rem',
        {
          letterSpacing: '0em',
          lineHeight: '2.50rem',
        },
      ],
      '6xl': [
        '3rem',
        {
          letterSpacing: '0em',
          lineHeight: '3.25rem',
        },
      ],
      '7xl': [
        '3.6rem',
        {
          letterSpacing: '0em',
          lineHeight: '4.25rem',
        },
      ],
      '8xl': [
        '5rem',
        {
          letterSpacing: '0em',
          lineHeight: '5.25rem',
        },
      ],
      '9xl': [
        '6rem',
        {
          letterSpacing: '0em',
          lineHeight: '6.25rem',
        },
      ],
    },
    fontFamily: {
      sans: ['Figtree', 'Jost', 'Maven Pro', 'Arial', 'sans-serif'],
      love_font: ['Figtree', 'Manrope', 'sans-serif'],
    },
    screens: {
      big: {
        min: '1801px',
      },
      // => @media (min-width: 1900px) { ... }

      '3xl': {
        max: '1800px',
      },
      // => @media (max-width: 1535px) { ... }

      '2xl': {
        max: '1535px',
      },
      // => @media (max-width: 1535px) { ... }

      gog: {
        max: '1365px',
      },
      // => @media (max-width: 1535px) { ... }

      xl: {
        max: '1279px',
      },

      gl: {
        max: '1050px',
      },
      // => @media (max-width: 1279px) { ... }

      lg: {
        max: '1023px',
      },
      // => @media (max-width: 1023px) { ... }

      md: {
        max: '767px',
      },
      // => @media (max-width: 767px) { ... }

      sm: {
        max: '639px',
      },
      // => @media (max-width: 639px) { ... }

      xs: {
        max: '400px',
      },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}