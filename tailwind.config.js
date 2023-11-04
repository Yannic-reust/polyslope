/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      tablet: '960px',
      desktop: '1280px'
    },
    colors: {
      white: '#FFFFFF',
      black: '#13070C',
      darkblue: '#1B65A6',
      accent: '#F9DC5C',
    },
    fontFamily: {
      sonar: ['sonar-sans', 'sans-serif'], // main font
      karmina: ['karmina', 'serif'], // title font
    },
    fontSize: {
      'h-lg': ['36px', { lineHeight: '42px', fontWeight: '700', fontFamily: 'karmina' }], // desktop main title
      'h-md': ['26px', { lineHeight: '32px', fontWeight: '700', fontFamily: 'karmina' }], // desktop sub title
      'h-sm': ['24px', { lineHeight: '30px', fontWeight: '700', fontFamily: 'karmina' }], // mobile main title
      'h-xs': ['20px', { lineHeight: '26px', fontWeight: '700', fontFamily: 'karmina' }], // mobile sub title
      'p-lg': ['18px', { lineHeight: '28px', fontWeight: '400', fontFamily: 'sonar-sans' }], // desktop text
      'p-sm': ['18px', { lineHeight: '28px', fontWeight: '400', fontFamily: 'sonar-sans' }], // mobile text
      'p-xs': ['12px', { lineHeight: '18px', fontWeight: '400', fontFamily: 'sonar-sans' }], // tiny text
      'label': ['12px', { lineHeight: '16px', fontWeight: '500', fontFamily: 'sonar-sans' }], // labels
    },
    extend: { fontFamily: { sans: ['sonar-sans'], }, } // set default font
  },
  plugins: [],
}