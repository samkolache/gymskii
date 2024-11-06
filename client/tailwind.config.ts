import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#3175B1",
        brandHover: '#256094',
        brandHeading: '#094067',
        navHover: '#6195C6',
        linkHover: '#E3F2FD',
        stats: '#1F3B4D'
      },
      fontFamily: {
        montserrat: ["Montserrat, sans-serif"],
        roboto: ["Roboto, sans-serif"]

      }
    },
  },
  plugins: [],
};
export default config;
