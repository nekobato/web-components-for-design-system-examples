module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.ts$/,
    use: [
      {
        loader: "ts-loader"
      }
    ]
  });

  config.module.rules.push({
    test: /\.html$/,
    use: [
      {
        loader: "raw-loader"
      }
    ]
  });

  config.module.rules.push({
    test: /\.(p|post)?css$/,
    use: [
      {
        loader: "raw-loader"
      },
      {
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          plugins: () => [require("postcss-nested")(), require("cssnano")()]
        }
      }
    ]
  });

  config.resolve.extensions.push(".ts", ".html", ".pcss");

  return config;
};
