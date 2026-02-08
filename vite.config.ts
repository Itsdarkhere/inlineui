import { reactRouter } from "@react-router/dev/vite";
import { cloudflareDevProxy } from "@react-router/dev/vite/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    target: "esnext",
  },
  plugins: [
    cloudflareDevProxy({
      configPath: "./wrangler.toml",
    }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
});
