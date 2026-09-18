import { defineConfig } from "@opennextjs/core";

export default defineConfig({
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
});
