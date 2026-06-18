/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/views/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          hover: '#4f46e5',
        },
        accent: {
          DEFAULT: '#68ddbd',
          hover: '#56c9a9',
          tagBg: '#e0f9f2',
          tagText: '#2d9a7e',
        },
        body: '#f8fafc',
        card: '#ffffff',
        dark: '#1e293b',
        light: '#64748b',
      }
    },
  },
  plugins: [],
}