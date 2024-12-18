/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans'],
      },
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      colors: {
        grey: {
          0: '#FFFFFF',
          100: '#F9FAFB',
          200: '#F4F6F8',
          300: '#DFE3E8',
          400: '#C4CDD5',
          500: '#919EAB',
          600: '#637381',
          700: '#454F5B',
          800: '#212B36',
          900: '#161C24',
        },
        primary: {
          lighter: '#C8FAD6',
          light: '#5BE49B',
          main: '#00A76F',
          dark: '#007867',
          darker: '#004B50',
          contrastText: '#FFFFFF',
        },
        secondary: {
          lighter: '#EFD6FF',
          light: '#C684FF',
          main: '#8E33FF',
          dark: '#5119B7',
          darker: '#27097A',
          contrastText: '#FFFFFF',
        },
        info: {
          lighter: '#CAFDF5',
          light: '#61F3F3',
          main: '#00B8D9',
          dark: '#006C9C',
          darker: '#003768',
          contrastText: '#FFFFFF',
        },
        success: {
          lighter: '#D3FCD2',
          light: '#77ED8B',
          main: '#22C55E',
          dark: '#118D57',
          darker: '#065E49',
          contrastText: '#ffffff',
        },
        warning: {
          lighter: '#FFF5CC',
          light: '#FFD666',
          main: '#FFAB00',
          dark: '#B76E00',
          darker: '#7A4100',
          contrastText: '#637381',
        },
        error: {
          lighter: '#FFE9D5',
          light: '#FFAC82',
          main: '#FF5630',
          dark: '#B71D18',
          darker: '#7A0916',
          contrastText: '#FFFFFF',
        },
      },
      boxShadow: {
        card: 'rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.1) 0px 12px 24px -4px',
        tabs: 'inset 0 -2px 0 0 rgba(145, 158, 171, 0.08)',
      },
    },
  },
  plugins: [require('tw-elements/plugin.cjs')],
};
