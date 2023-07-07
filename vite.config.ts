import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
import { hash } from "./src/utils/cacheClear";

export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  // configureWebpack: (config) => {
  //   config.output.filename = "js/[name].[hash].js";
  //   config.output.chunkFilename = "js/[name].[hash].js";
  // },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]` + hash + `.js`,
        chunkFileNames: `[name]` + hash + `.js`,
        assetFileNames: `[name]` + hash + `.[ext]`,
      },
    },
  },
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
