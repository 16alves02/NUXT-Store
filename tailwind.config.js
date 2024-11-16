/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{vue,js,ts,html}', // Include Vue and JS files in pages
      './components/**/*.{vue,js,ts,html}', // Include Vue and JS files in components
      './layouts/**/*.{vue,js,ts,html}', // Include Vue and JS files in layouts
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };