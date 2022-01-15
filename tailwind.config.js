module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'vermilion-100' : '#e60023',
      'vermilion-200' : '#b32505',
      'blue': '#428bff',
      'green-100': '#008a05',
      'orange-100': '#e07912',
       white: '#fff',
       gray: '#ddd',
       'gray-200': '#d0d0d0',
       black: '#000', 
       darkYello: '#c28b00',
       darkGreen: '#618c7b',
       green: '#407a57'
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}