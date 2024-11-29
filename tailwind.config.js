/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'primary-gradient-start': '#667eea',
        'primary-gradient-end': '#764ba2',
      }),
    },
  },
  plugins: [],
}
