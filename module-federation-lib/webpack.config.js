const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./index.js",
  mode: "development",
  output: {
    publicPath: "http://localhost:6780/",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 6780,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "module_federation_lib",
      filename: "remoteEntry.js",
      exposes: {
        "./react": "react",
        "./react-dom": "react-dom",
      },
    }),
  ],
};
