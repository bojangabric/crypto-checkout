const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'dark-gray': '#3F4048',
        'medium-gray': '#53545A',
        'light-gray': '#EDEFF0',
        'primary-blue': '#4077C1',
        'secondary-dark': '#787A81'
      },
      dropShadow: {
        button: '0 1px 10px rgba(0, 0, 0, 0.05)',
        info: '0 2px 4px rgba(0, 0, 0, 0.06)'
      }
    }
  },
  variants: {},
  plugins: []
};
