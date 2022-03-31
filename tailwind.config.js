module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0C080B',
        green: '#1E3329',
        yellow: '#ffc94b',
        pink: '#fed2d1',
        'dark-grey': '#B8B8B8',
        'light-grey': '#ECECEC',
        light: '#FAFAFA',
      },
      zIndex: {
        '-1': -1,
      },
      container: {
        padding: '1rem',
      },
    },
  },
  plugins: [],
};
