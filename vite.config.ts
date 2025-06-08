// @ts-check
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  // Serve from the client directory
  root: path.resolve(__dirname, "client"),
  plugins: [react()],
  resolve: {
    alias: {
      // Map @ to client/src
      "@": path.resolve(__dirname, "client/src"),
      "@server": path.resolve(__dirname, "server"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  // Static assets folder
  publicDir: path.resolve(__dirname, "public"),
  build: {
    // Output into dist/client
    outDir: path.resolve(__dirname, "dist/client"),
    emptyOutDir: true,
    rollupOptions: {
      // Explicitly point Rollup to your client/index.html as entry
      input: path.resolve(__dirname, "client/index.html"),
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
})