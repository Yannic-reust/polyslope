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
      sonar: ['sonar-sans', 'sans-serif'],
      karmina: ['karmina', 'serif'],
    },
    fontSize: {
      'h-lg': ['36px', { lineHeight: '42px', fontWeight: '700', fontFamily: 'karmina' }],
      'h-md': ['24px', { lineHeight: '30px', fontWeight: '700', fontFamily: 'karmina' }],
      'h-sm': ['24px', { lineHeight: '30px', fontWeight: '700', fontFamily: 'karmina' }],
      'h-md': ['20px', { lineHeight: '26px', fontWeight: '700', fontFamily: 'karmina' }],
      'p-lg': ['18px', { lineHeight: '28px', fontWeight: '400', fontFamily: 'sonar-sans' }],
      'p-sm': ['18px', { lineHeight: '28px', fontWeight: '400', fontFamily: 'sonar-sans' }],
      'p-xs': ['12px', { lineHeight: '22px', fontWeight: '400', fontFamily: 'sonar-sans' }],
      'label': ['12px', { lineHeight: '16px', fontWeight: '500', fontFamily: 'sonar-sans' }],
    },
    extend: {},
  },
  plugins: [],
}

