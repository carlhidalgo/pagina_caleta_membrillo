/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#FF6363",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',

        },
      },
      plugins: [],
    }
  }

}

