import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const REPO_BASE = "/";

// Repo name on GitHub Pages
//const REPO_BASE = "/Portfolio-Webportal/";

export default defineConfig({
  base: REPO_BASE,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
