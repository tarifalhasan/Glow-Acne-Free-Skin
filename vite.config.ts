import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@swiper": "./node_modules/swiper",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/presentation/config/bootstrap/_custom.scss";
        `,
        silenceDeprecations: [
          "mixed-decls",
          "legacy-js-api",
          "color-functions",
          "import",
          "global-builtin",
        ],
      },
    },
  },
});
