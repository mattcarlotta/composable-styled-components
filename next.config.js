const openBrowser = require("react-dev-utils/openBrowser");
const plugins = require("./config/plugins");

const { NODE_ENV, LOCALHOST } = process.env;
const inProd = NODE_ENV === "production";
const assetPrefix = inProd ? LOCALHOST : "";

/* opens a browser window */
if (NODE_ENV === "development") openBrowser(`${LOCALHOST}`);

module.exports = {
  assetPrefix,
  exportPathMap: () => ({
    "/": { page: "/" }
  }),
  webpack(config, { isServer }) {
    /* adds custom plugins to client and server */
    config.plugins.push(...plugins(isServer));

    /* return new config to next */
    return config;
  }
};
