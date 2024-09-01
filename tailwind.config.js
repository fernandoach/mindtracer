const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui(
    {
      defaultTheme: 'dark',
      themes: {
        light: {
          colors: {
            // primarios
            foreground: '#333',
            background: '#f5f5f5',
            primary: '#4a90e2',
            secondary: '#50e3c2',
            // secundarios
            success: '#2ecc71',
            warning: '#f1c40f',
            error: '#e74c3c',
            // neutros
            muted: '#b0b0b0',
            border: '#e0e0e0'
          }
        },
        dark: {
          // primarios
          foreground: '#e0e0e0',
          background: '#2c2c2c',
          primary: '#4a90e2',
          secondary: '#50e3c2',
          // secundarios
          success: '#2ecc71',
          warning: '#f1c40f',
          error: '#e74c3c',
          // neutros
          muted: '#8c8c8c',
          border: '#3a3a3a'
        }
      }
    }
  )]
}
