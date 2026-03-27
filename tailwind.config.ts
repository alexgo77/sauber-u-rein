import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4fa",
          100: "#d4e3f2",
          200: "#a9c7e5",
          300: "#7eabd8",
          400: "#5390cb",
          500: "#326CA4",
          600: "#2a5b8b",
          700: "#224a72",
          800: "#1a3959",
          900: "#122840",
        },
      },
      fontFamily: {
        heading: ["Josefin Sans", "system-ui", "sans-serif"],
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
