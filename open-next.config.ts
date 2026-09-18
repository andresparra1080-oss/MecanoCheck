// Use a local shim for defineConfig to ensure OpenNext sees a defineConfig call
// without depending on resolving @opennextjs/core at bundle time.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { defineConfig } = require('./shims/opennext-core.cjs');

export default defineConfig({
  cache: {
    static: {
      maxAge: 31536000,
      staleWhileRevalidate: 86400,
    },
  },
  assets: {
    directory: ".open-next/assets",
  },
});
