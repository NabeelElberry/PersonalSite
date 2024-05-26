/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'backgroundgreen': '#7ABA78',
      'textgreen': '#42827a',
      'subtextgreen': '#54a89e',
      'pinkish':  '#F1BDBD',
      'panelbg': '#5d8580',
      'paneloutline': '#41635f'
    },
    extend: {
      dropShadow: {
        'custom': '0 0px 5px rgba(255, 255, 255, 0.15)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

