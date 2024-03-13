const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoCompression: 15,
  e2e: {
   baseUrl: 'http://avisos-h.maracanau.ifce.edu.br',
  },
});
