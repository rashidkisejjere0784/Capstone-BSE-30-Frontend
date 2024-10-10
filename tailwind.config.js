/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontSize: {
        '3xl': ['2.5rem', '2rem'],
        h2: ['2rem', '2rem']
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },

        // Gray Colors
        'gray-00': 'rgba(255, 255, 255, 1)',
        'gray-50': 'rgba(242, 244, 245, 1)',
        'gray-100': 'rgba(228, 231, 233, 1)',
        'gray-300': 'rgba(173, 183, 188, 1)',
        'gray-400': 'rgba(146, 159, 165, 1)',
        'gray-500': 'rgba(119, 135, 143, 1)',
        'gray-600': 'rgba(95, 108, 114, 1)',
        'gray-700': 'rgba(71, 81, 86, 1)',
        'gray-800': 'rgba(48, 54, 57, 1)',
        'gray-900': 'rgba(25, 28, 31, 1)',
        // Secondary Colors
        'secondary-100': 'rgba(213, 237, 253, 1)',
        'secondary-500': 'rgba(45, 165, 243, 1)',
        'secondary-600': 'rgba(36, 132, 194, 1)',
        'secondary-700': 'rgba(27, 99, 146, 1)',
        //   Primary Colors
        'primary-50': 'rgba(255, 243, 235, 1)',
        'primary-100': 'rgba(255, 231, 214, 1)',
        'primary-200': 'rgba(255, 206, 173, 1)',
        'primary-500': 'rgba(250, 130, 50, 1)',
        //   Warning Colors
        'warning-200': 'rgba(247, 233, 158, 1)',
        'warning-300': 'rgba(243, 222, 109, 1)',
        'warning-400': 'rgba(239, 211, 61, 1)',
        'warning-500': 'rgba(235, 200, 12, 1)',
        //   Dark Blue Colors
        'dark-blue-200': 'rgba(255, 255, 255, 0.12)',
        'dark-blue-800': 'rgba(18, 66, 97, 1)',
        //   Danger Colors
        'danger-500': 'rgba(238, 88, 88, 1)',
        'danger-600': 'rgba(190, 70, 70, 1)',
        //   Success Colors
        'success-50': 'rgba(234, 247, 233, 1)',
        'success-100': 'rgba(213, 240, 211, 1)',
        'success-500': 'rgba(45, 178, 36, 1)',
        //   other colors
        divider: 'rgba(255, 255, 255, 0.16)',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
