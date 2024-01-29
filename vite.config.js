import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginRedirect } from "vite-plugin-redirect";

export default defineConfig({
  plugins: [
    react(),
    VitePluginRedirect({
      // Add your redirect rules here
      rules: [
        { from: "/old-path", to: "/new-path" },
        { from: "/another-old-path", to: "/another-new-path" },
      ],
    }),
  ],
});
