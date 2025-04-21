/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#050505', // deep charcoal
          light: '#1a1a1a'
        },
        accent: {
          DEFAULT: '#226160', // teal
          light: '#2a7674',
          dark: '#1a4a49'
        },
        secondary: {
          DEFAULT: '#a95f4d', // warm brown
          light: '#c07a6a',
          dark: '#8c4e3f'
        },
        highlight: {
          DEFAULT: '#d0a465', // gold
          light: '#deb87e',
          dark: '#b88e4e'
        },
        light: {
          DEFAULT: '#fdf6eb', // light cream
          dark: '#f5e9d3'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
        'slide-in-right': 'slideInRight 0.5s ease-in-out',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};