/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#090b0d',
        'dark-surface': '#101317',
        'dark-card': '#15191f',
        'light-bg': '#f9f8f6',
        gold: {
          primary: '#d4af37',
          champagne: '#e5d3b3',
          light: '#f5ebd8',
          deep: '#aa8222',
          muted: '#9c8a6e',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Garamond', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        signature: ['"Alex Brush"', 'cursive'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f7ebd5 0%, #d4af37 50%, #a67c1e 100%)',
        'gold-subtle': 'linear-gradient(180deg, rgba(245, 235, 216, 0.08) 0%, rgba(212, 175, 55, 0.015) 100%)',
        'hero-radial': 'radial-gradient(circle at 75% 30%, #15191f 0%, #090b0d 70%)',
        'thyroid-radial': 'radial-gradient(circle at 80% 50%, #15191f 0%, #090b0d 70%)',
        'cta-radial': 'radial-gradient(circle at 100% 0%, #1c2129 0%, #101317 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'card-dark': '0 20px 60px rgba(0, 0, 0, 0.8)',
        'card-light': '0 16px 36px rgba(170, 130, 34, 0.12)',
      },
    },
  },
  plugins: [],
}
