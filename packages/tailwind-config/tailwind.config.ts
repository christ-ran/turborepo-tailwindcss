import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    relative: true,
    files: [
      "./app/**/*.{js,jsx,ts,tsx,md}",
      "./components/**/*.{js,jsx,ts,tsx,md}",
      "../../packages/ui/**/*{.js,.ts,.jsx,.tsx,md}",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
