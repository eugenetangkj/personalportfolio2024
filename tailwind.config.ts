import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "tech-blue": "#3EA2DA",
        "design-purple": "#953EDA",
        "community-orange": "#DA923E",
        "light-gray": "#B6B6B6"
      },
      animation: {
        blob: "blob 5s linear infinite",
        blobmedium: "blob 4.5s linear infinite",
        blobfast: "blob 4s linear infinite",
        blobfaster: "blob 3s linear infinite",

      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0, 100vh) scale(0)",
          },
          "20%": {
            transform: "translate(0, 80vh) scale(0.5)",
          },
          "40%": {
            transform: "translate(0, 60vh) scale(0.75)",
          },
          "60%": {
            transform: "translate(0, 40vh) scale(0.5)",
          },
          "80%": {
            transform: "translate(0, 20vh) scale(0.3)",
          },
          "100%": {
            transform: "translate(0, 0vh) scale(0.1)",
          }
        }
      },
    },
  },
  plugins: [],
}
export default config
