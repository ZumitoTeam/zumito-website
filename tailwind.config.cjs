const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  darkMode: 'false',
  
  theme: {
    extend: {},
  },

  plugins: [require('daisyui')],
};

module.exports = config;
