module.exports = function (api) {
  const inProd = api.env("production");
  const inTesting = api.env("testing");
  api.cache(() => process.env.NODE_ENV);

  return {
    presets: [
      "@babel/preset-react",
      "@babel/preset-typescript",
      !inTesting
        ? ["@babel/preset-env", { modules: false, loose: true }]
        : "@babel/preset-env"
    ].filter(Boolean),
    plugins: [
      "@babel/plugin-transform-runtime",
      [
        "babel-plugin-styled-components",
        {
          ssr: true,
          displayName: !inProd,
          fileName: !inProd
        }
      ]
    ]
  };
};
