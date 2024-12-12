import type { Config } from 'tailwindcss';

// Use import * as for defaultTheme
import * as defaultTheme from 'tailwindcss/defaultTheme';

/** @type {Config} */
const config: Config = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './resources/js/**/*.tsx',
  ],
  safelist: [
    { pattern: /w-./ },
    { pattern: /me-10/ },
    { pattern: /space-y-(7|10|20)/ },
    { pattern: /gap-3/ },
    { pattern: /text-5xl/, variants: ['md'] },
    {
      pattern: /grid-cols-(1|2|4)/,
      variants: ['md'],
    },
    {
      pattern: /border-(r|b)-(0|2)/,
      variants: ['md'],
    },
    { pattern: /(px|py)-./ },
    { pattern: /m-(auto|1)/ },
    {
      pattern: /pt-(12|8)/,
      variants: ['md'],
    },
  ],

  darkMode: ['class'],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': ['0 35px 35px rgba(0, 0, 0, 0)', '0 45px 65px rgba(0, 0, 0, 0)'],
      },
      colors: {
        dark: {
          900: '#1A1A1A',
          800: '#292929',
          700: '#434343',
        },
        accent: '#E68722',
        primary: '#FE5B62',
        primaryLight: '#f87076',
        secondary: '#f49296',
        shadow: '#a8686b',
        light: {
          900: '#FFFFFF',
          800: '#F9F9F9',
          700: '#FDFDFD',
          600: '#EAEAEA',
        },
        semiLight: '#f9f9f9',
        'light-xl': '#f6f6f6',
        'light-xs': '#848484',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '56px',
      },
      fontFamily: {
        cooperplate: ['Copperplate', ...defaultTheme.fontFamily.sans],
        firsNeue: ['TT Firs Neue', ...defaultTheme.fontFamily.sans],
        colus: ['Colus-Regular', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'light-100':
          '0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)',
        'light-200': '10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'light-300': '-10px 10px 20px 0px rgba(218, 213, 213, 0.10)',
        'dark-100': '0px 2px 10px 0px rgba(46, 52, 56, 0.10)',
        'dark-200': '2px 0px 20px 0px rgba(39, 36, 36, 0.04)',
      },
      backgroundImage: {
        rays: "url('/images/rays.svg')",
      },
      screens: {
        xs: '420px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin 5s linear infinite',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
    },
  },

  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export default config;
