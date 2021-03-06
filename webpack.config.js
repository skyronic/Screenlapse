const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const tailwind = require("tailwindcss")

module.exports = {
  mode: "development",
  devtool: "eval",
  target: "electron-renderer",
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "desktop/out/")
  },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      'util': path.resolve(__dirname, 'src/util/'),
      'store': path.resolve(__dirname, 'src/store/'),
      'components': path.resolve(__dirname, 'src/components/'),
      'lib': path.resolve(__dirname, 'src/lib/'),
    }
  },
  plugins: [
      new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [
            {loader: "vue-style-loader"},
            {loader: "css-loader"},
            // {
            //     loader: 'postcss-loader',
            //     options: {
            //         ident: 'postcss',
            //         plugins: [
            //             tailwind(path.resolve(__dirname, "tailwind.config.js")),
            //             require('autoprefixer'),
            //         ],
            //     },
            // },
        ]
      }
    ]
  }
};
