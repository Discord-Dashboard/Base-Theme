import { join } from 'path';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, './client/**/*.{js,jsx,ts,tsx}')],
  theme: {
    extend: {},
  },
  plugins: [],
};
