import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// import path from "path";
import { patchCssModules } from "vite-css-modules";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    server: {
      port: 3000,
    },
    plugins: [
      react({
        babel: {
          plugins: [
            [
              "react-css-modules", // important for importing css modules as styleName
              {
                filetypes: {
                  ".scss": {
                    syntax: "postcss-scss",
                    plugins: ["postcss-nested"],
                  },
                },
                exclude: "node_modules",
                handleMissingStyleName: "ignore",
                generateScopedName: "[path]___[name]__[local]", // used to be [path]___[name]__[local]___[hash:base64:5]
              },
            ],
          ],
        },
      }),
      svgr(),
      patchCssModules(),
    ],
    css: {
      modules: {
        generateScopedName: "[path]___[name]__[local]",
      },
    },
  };
});
