/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'bg-desktop': "url('/assets/images/background-desktop.png')",
          'bg-tablet': "url('/assets/images/background-tablet.png')",
          'bg-mobile': "url('/assets/images/background-mobile.png')"
        }
      },
    },
    plugins: [],
  };
  