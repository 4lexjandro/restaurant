module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [require('daisyui')],
}