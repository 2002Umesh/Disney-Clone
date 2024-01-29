import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginRedirect } from "vite-plugin-redirect";

export default defineConfig({
  plugins: [
    react(),
    VitePluginRedirect({
      // Add your redirect rules here
      rules: [
        { from: "/old-page", to: "https://sasta-disney-plus.vercel.app" },
        { from: "/legacy", to: "https://sasta-disney-plus.vercel.app" },
      ],
    }),
  ],
});
