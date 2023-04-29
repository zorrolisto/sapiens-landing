import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: { themes: ["light"] },
  plugins: [require("daisyui")],
} satisfies Config;
