const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

const deps = require("./package.json").dependencies;

module.exports = {
  publicPath: "http://localhost:9000/",
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "core",
        filename: "remoteEntry.js",
        exposes: {
          "./CoreApp": "./src/bootstrap",
        },
      }),
    ],
  },
  devServer: {
    port: 9000,
  },
};
