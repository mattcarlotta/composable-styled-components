const openBrowser = require("react-dev-utils/openBrowser");
const plugins = require("./config/plugins");

const { assetPrefix, NODE_ENV, LOCALHOST } = process.env;

/* opens a browser window */
if (NODE_ENV === "development") openBrowser(`${LOCALHOST}`);

module.exports = {
  assetPrefix,
  exportPathMap: () => ({
    "/": { page: "/" },
    "/docs": { page: "/docs" },
    "/demo": { page: "/demo" },
    "/releases": { page: "/releases" }
  }),
  webpack(config, { isServer }) {
    /* adds custom plugins to client and server */
    config.plugins.push(...plugins(isServer));

    /* return new config to next */
    return config;
  }
};
