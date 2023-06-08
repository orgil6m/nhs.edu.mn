/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#4DD6FF",
      yellow: "#F5CA19",
      pink: "#FF8EC7",
      primary: "#AC6AFF",
      green: "#2BFFC8",
      dark: "#0E0C15",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
