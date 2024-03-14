module.exports = function (api) {
  api.cache(false);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["nativewind/babel"],
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env",
          blocklist: null,
          allowlist: null,
          blacklist: null, 
          whitelist: null, 
          safe: false,
          allowUndefined: true,
          verbose: false,
        },
      ],
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
          alias: {
            "@screens": "./src/screens/index",
            "@screens/*": "./src/screens/*",
            "@constants": "./src/constants/index",
            "@components/*": "./src/components/*",
            "@containers": "./src/containers/index",
            "@hooks": "./src/hooks/index",
            "@i18n": "./src/i18n/index",
            "@utils": "./src/utils/index",
            "@types": "./src/types/index",
            "@images/*": "./src/assets/images/*",
          },
        },
      ],
    ],
  };
};
