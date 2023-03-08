const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      watchForFileChanges = false
      this.pageLoadTimeout = 12000
      setTimeout = 120000
    },
  },
});
