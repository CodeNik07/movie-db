const flowbites = require("flowbite-react/tailwind");
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbites.content(),
  ],
  theme: {
    extend: {},
    colors: {
      'primary-100': '#caf0f8',
      'primary-200': '#ade8f4',
      'primary-300': '#90e0ef',
      'primary-400': '#48cae4',
      'primary-500': '#00b4d8',
      'primary-600': '#0096c7',
      'primary-700': '#0077b6',
      'primary-800': '#023e8a',
      'primary-900': '#03045e',

    },
  },
  plugins: [
    flowbites.plugin(),
  ],
}

