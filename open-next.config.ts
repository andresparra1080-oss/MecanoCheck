// Minimal OpenNext configuration without requiring @opennextjs/core at build time.
// Keeping this file dependency-free avoids CI type-check failures when the package
// isn't installed in the build environment. Tune cache settings for your account later.

const config = {
  cache: {
    // minimal cache configuration — tune later for your account
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
