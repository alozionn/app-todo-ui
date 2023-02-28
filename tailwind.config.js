/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        markpro: ['Mark-Pro'],
        'markpro-bold': ['Mark-Pro-Bold'],
      },
      colors: {
        'dark-sky-blue': '#4a77e5',
        'dark-blue-gray': '#1f2a4b',
        'cool-grey': '#9ea3b2',
      },
      width: {
        card: '440px',
      },
      height: {
        card: '437px',
      },
      padding: {
        'card-x': '30px',
        'card-y': '35px',
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
