module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      animation: {
        fade: 'fadeIn 3s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '50%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [require('daisyui')],
}