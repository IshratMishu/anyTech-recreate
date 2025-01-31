/** @type {import('tailwindcss').Config} */

export default {
  // content: [
  //   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   darkBlue: "var(--dark-blue)",
      //   middarkBlue: "var(--mid-dark-blue)",
      //   blue: "var(--blue)",
      //   orange: "var(--orange)"
      // },
    },
  },
  plugins: [],
};
