/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'cinzel': ['Cinzel', 'serif'],
        'ptserif': ['PT Serif', 'serif'],
      },
    },
  },
  plugins: [],
}

