// vite.config.ts
import path from "path";
import react from "file:///S:/Mern%20Projects/Todo%20Full%20stack%20application/frontend/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.2.1_@types+node@20.12.12_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///S:/Mern%20Projects/Todo%20Full%20stack%20application/frontend/node_modules/.pnpm/vite@5.2.1_@types+node@20.12.12/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "S:\\Mern Projects\\Todo Full stack application\\frontend";
var vite_config_default = defineConfig({
  server: {
    proxy: {
      "/api": (
        "https://taskly-55pj.onrender.com"
      )
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJTOlxcXFxNZXJuIFByb2plY3RzXFxcXFRvZG8gRnVsbCBzdGFjayBhcHBsaWNhdGlvblxcXFxmcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiUzpcXFxcTWVybiBQcm9qZWN0c1xcXFxUb2RvIEZ1bGwgc3RhY2sgYXBwbGljYXRpb25cXFxcZnJvbnRlbmRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1M6L01lcm4lMjBQcm9qZWN0cy9Ub2RvJTIwRnVsbCUyMHN0YWNrJTIwYXBwbGljYXRpb24vZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc2VydmVyOiB7XG4gICAgcHJveHk6IHtcbiAgICAgIFwiL2FwaVwiOlxuICAgICAgLy8gIFwiaHR0cDovL2xvY2FsaG9zdDo1NTAwXCIgfHxcbiAgICAgICBcImh0dHBzOi8vdGFza2x5LTU1cGoub25yZW5kZXIuY29tXCIsXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVcsT0FBTyxVQUFVO0FBQ2xYLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUY3QixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTDtBQUFBO0FBQUEsUUFFQztBQUFBO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
