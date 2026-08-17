/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          950: '#12100E',
          900: '#1C1917',
          850: '#231F1C',
          800: '#2C2723',
          700: '#443D36',
          600: '#645B51',
          500: '#8A7F73',
          400: '#B0A69A',
          300: '#D5CDC4',
          200: '#E8E3DC',
          100: '#F5F2EC',
          50: '#FAF8F5',
        },
        terracotta: {
          900: '#68250F',
          800: '#8F3415',
          700: '#B8451E',
          600: '#D45327',
          500: '#E26639',
          400: '#EA845F',
          300: '#F2A68B',
          200: '#F8CBB8',
          100: '#FDEEE6',
          50: '#FFF7F2',
        },
        sand: {
          900: '#3D3528',
          800: '#5C503D',
          700: '#7E6F54',
          600: '#A49272',
          500: '#C2B191',
          400: '#D8CBB2',
          300: '#E6DC melt',
          200: '#EFE7DA',
          100: '#F7F3EB',
          50: '#FAF8F3',
        },
        construction: {
          orange: '#FF6B35',
          amber: '#F59E0B',
          gold: '#E5A93C',
          slate: '#334155',
          concrete: '#94A3B8',
          steel: '#64748B',
          green: '#3F6253',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'Sora', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'blueprint-grid': "radial-gradient(rgba(226, 102, 57, 0.12) 1px, transparent 1px)",
        'blueprint-dark': "radial-gradient(rgba(242, 166, 139, 0.08) 1px, transparent 1px)",
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
