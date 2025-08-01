// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'merriweather': ['Merriweather', 'serif'],
        'typewriter': ['Courier New', 'monospace'],
      },
      colors: {
        vintage: {
          paper: '#fefdf8',
          cream: '#f9f6f0',
          parchment: '#f4f1e8',
          ink: '#2d1810',
          sepia: '#8b7355',
          gold: '#d4af37',
          brown: '#6b4423',
          rust: '#b7410e',
          amber: '#ffbf00',
          burgundy: '#800020',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'typewriter': 'typewriter 1s steps(20) infinite',
        'seal-bounce': 'sealBounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px) rotate(-2deg)', opacity: '0' },
          '100%': { transform: 'translateY(0) rotate(-0.5deg)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        typewriter: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        sealBounce: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.05) rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
