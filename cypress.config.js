const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://www.automationpractice.pl',
    supportFile: 'cypress/support/commands.js'
  },
})