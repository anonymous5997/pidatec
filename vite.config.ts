import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "./server";

// Needed for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(() => ({
  // Frontend root
  root: path.resolve(__dirname, "client"),

  server: {
    host: "::",
    port: 8080,

    fs: {
      // ✅ ABSOLUTE paths — no ambiguity
      allow: [
        path.resolve(__dirname, "client"),
        path.resolve(__dirname, "shared"),
      ],
      deny: [
        path.resolve(__dirname, "server"),
        ".env",
        ".env.*",
        "*.{crt,pem}",
        "**/.git/**",
      ],
    },
  },

  build: {
    outDir: path.resolve(__dirname, "dist/spa"),
    emptyOutDir: true,
  },

  plugins: [
    react(),
    expressPlugin(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
}));

// ----------------------
// Express middleware
// ----------------------
function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve",
    configureServer(viteServer) {
      const app = createServer();

      // Attach Express BEFORE Vite's fallback
      viteServer.middlewares.use(app);
    },
  };
}
