import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    // Let Vite/Rollup handle chunk splitting automatically.
    // Manual chunks caused vendor-libs to load React-dependent packages
    // (cmdk, sonner, vaul, recharts, embla-carousel-react, next-themes, etc.)
    // before vendor-react was initialized, crashing with:
    // "Cannot read properties of undefined (reading 'useLayoutEffect')"
    rollupOptions: {
      output: {
        entryFileNames: "[name]-[hash].js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "[name]-[hash][extname]",
      },
    },
  },
}));