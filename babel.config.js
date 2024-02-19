module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // ..other plugins if any
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
          alias: {
            "@screens": "./src/screens/index",
            "@components/*": "./src/components/*",
            "@containers": "./src/containers/index",
            "@i18n": "./src/i18n/index",
            "@utils": "./src/utils/index",
            "@images": "./src/images/index",
          },
        },
      ],
    ],
  };
};
