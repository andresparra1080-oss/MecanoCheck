// Export a plain config object for OpenNext. Avoid importing @opennextjs/core to prevent bundling issues.
// OpenNext accepts a plain default export as configuration.

const config = {
  cache: {
    static: {
      maxAge: 31536000,
      staleWhileRevalidate: 86400,
    },
  },
  assets: {
    directory: ".open-next/assets",
  },
};

export default config;
