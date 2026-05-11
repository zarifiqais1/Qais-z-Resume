/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // این خط حیاتی است
  ],
  theme: {
    extend: {
      colors: {
        accent: "#aa3bff",
      },
    },
  },
  plugins: [],
};
