import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "playwrite": ['"Playwrite NG Modern"', 'sans-serif'],
        "Kanit":["Kanit", "sans-serif"],
      },
      colors: {
        'blue-gradient': 'linear-gradient(90deg, #1e3a8a, #3b82f6)',
      },
    },
  },
  plugins: [],
};
export default withMT(config);
