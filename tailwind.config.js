/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
      PoppinsRegular: 'PoppinsRegular',
      PoppinsMedium: 'PoppinsMedium',
      PoppinsSemiBold: 'PoppinsSemiBold',
      PoppinsBold: 'PoppinsBold',
      PoppinsItalic: 'PoppinsItalic'
    },
    extend: {
      boxShadow:{
        boxShadowRed: '0px 8px rgb(252, 104, 104)',
        boxShadowGreen: '0px 4px rgb(43, 171, 115)',
      },
      colors:{
       Red: 'hsl(0, 100%, 74%)',
       Green: 'hsl(154, 59%, 51%)',
       Blue: 'hsl(248, 32%, 49%)',
       DarkBlue: 'hsl(249, 10%, 26%)' ,
       GrayishBlue: 'hsl(246, 25%, 77%)'
      }
    },
  },
  plugins: [],
}

