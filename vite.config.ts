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
    // Target Safari 14+ (iOS 14), Chrome 87, Firefox 78, Edge 88
    // Without this Vite defaults to ESNext which crashes older iOS Safari
    target: ['es2015', 'chrome87', 'firefox78', 'safari14', 'edge88'],
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: "[name]-[hash].js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "[name]-[hash][extname]",
        manualChunks: (id) => {
          if (!id.includes('node_modules')) return;

          // Supabase — large, no React dependency, load independently
          if (id.includes('@supabase')) return 'vendor-supabase';

          // Icons — large but static, no React lifecycle hooks at init
          if (id.includes('lucide-react')) return 'vendor-icons';

          // Everything else React-dependent (react, react-dom, radix, framer,
          // recharts, cmdk, sonner, vaul, tanstack, react-day-picker, etc.)
          // must all live in ONE chunk so React is always initialized first.
          return 'vendor-react-ui';
        },
      },
    },
  },
}));