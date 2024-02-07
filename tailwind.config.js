/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3951C9',
        },
        secondary:{
          DEFAULT: '#E74C3C'
        },
        success:{
          DEFAULT: '#2ECC71'
        },
        error:{
          DEFAULT: '#E22B23'
        },
        info:{
          DEFAULT: '#3498DB'
        },
        warning:{
          DEFAULT: '#E74C3C'
        },
        neutral:{
          DEFAULT: '#E74C3C'
        },


      }
    },
  },
  plugins: [],

}

