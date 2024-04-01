/** @type {import('tailwindcss').Config} */
module.exports = {
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
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-red": "#F5385E",
        "custom-yellow": "#F4A01C",
        "custom-green": "#75B658",
        "custom-green-dark":"#22732D",
        "custom-white": "#EFEFEF",
        "custom-black": "#152430",
      },
    },
  },
  plugins: [],
};
