/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFFBEA',    // เฉดสีที่อ่อนที่สุด
          100: '#FFF3C4',
          200: '#FCE588',
          300: '#FADB5F',
          400: '#F7C948',
          500: '#FABD02',   // สีหลัก (DEFAULT)
          600: '#E9B200',
          700: '#C69002',
          800: '#A36802',
          900: '#7D4E00',   // เฉดสีที่เข้มที่สุด
          DEFAULT: '#FABD02',  // ใช้เมื่อเรียก primary
          dark: '#388E3C',   // สีเข้ม
          light: '#C8E6C9',  // สีอ่อน
        },
        secondary: {
          50: '#f7f7f7',
          100: '#e1e1e1',
          200: '#cfcfcf',
          300: '#b1b1b1',
          400: '#9e9e9e',
          500: '#a6a6a6', // สีหลักของ secondary
          600: '#7e7e7e',
          700: '#626262',
          800: '#515151',
          900: '#3b3b3b',
        },
      },
    },
  },
  plugins: [],
}