import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      backgroundColor : {
        "bgc" : "#1E293B",
        "box" : "rgba(255, 255, 255, 0.155)",
        "bgbc" : "#6B7280"
      },
      textColor: {
        "tc": "#F3F4F6",
        "toc" : "#D1D5DB"
      },

    },
  },
  plugins: [],
};
export default config;
