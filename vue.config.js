const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
process.env.VUE_APP_VERSION = require("./package.json").version;
module.exports = {
  devServer: {
    port: 8080,
  },
};
