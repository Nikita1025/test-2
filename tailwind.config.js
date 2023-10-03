/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xl': '1440px',
      'md': '1024px',
      'mn': '390px'
    },
    fontFamily:{
      roboto:['Roboto'],
      inter: ['Inter', 'sans-serif']
    },
    extend: {
      colors:{
        'accent-primary': '#FBE54D',
        'base-inputs': '#2A2B31',
        'base-secondary':'#242529',
        'stroke':'#333535',
        'disabled':'#848484',
        'primary':'#FFFFFF',
        'secondary':'#D0D0D0'
      }
    },
  },
  plugins: [],
}

