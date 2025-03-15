const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'zinc-50': 'rgb(250, 250, 250)',
        'zinc-900': 'rgb(24, 24, 27)',
        'blue-500': 'rgb(59, 130, 246)',
        'indigo-300': 'rgb(165, 180, 252)',
        'blue-300': 'rgb(147, 197, 253)',
        'violet-200': 'rgb(221, 214, 254)',
        'blue-400': 'rgb(96, 165, 250)',
      },
      animation: {
        'aurora': 'aurora 60s linear infinite',
      },
      keyframes: {
        aurora: {
          from: { 'background-position': '50% 50%, 50% 50%' },
          to: { 'background-position': '350% 50%, 350% 50%' },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
} 