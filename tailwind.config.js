/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xl: '1280px',
      lg: '768px',
      md: '640px',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      width: {
        61: '249px',
      },
      borderWidth: {
        'border-1': '1px',
      },
      spacing: {
        17: '68px',
        '15-5': '51px',
        18: '18px',
        30: '120px',
        37: '155px',
        45: '180px',
      },
      fontSize: {
        xxs: '10px',
        '3.1xl': '31px',
      },
      colors: {
        'accent-primary': '#FBE54D',
        'base-inputs': '#2A2B31',
        'base-secondary': '#242529',
        stroke: '#333535',
        disabled: '#848484',
        primary: '#FFFFFF',
        secondary: '#D0D0D0',
        'button-bg': '#2D2D2D',
        'text-button': '#161616',
        error: '#E76143',
      },
    },
  },
  plugins: [],
};
