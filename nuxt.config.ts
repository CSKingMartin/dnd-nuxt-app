// nuxt.config.js

export default {
  buildModules: ["@nuxt/postcss8"],
  css: ["@/assets/css/styles.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt"],
  typescript: {
    strict: true,
  },
};
