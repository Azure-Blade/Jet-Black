// vite.config.ts
import { defineConfig } from "file:///home/fractal-tess/dev/Jet-Black/monorepo/node_modules/.pnpm/vite@3.2.4/node_modules/vite/dist/node/index.js";
import { sveltekit } from "file:///home/fractal-tess/dev/Jet-Black/monorepo/node_modules/.pnpm/@sveltejs+kit@1.0.0-next.560_svelte@3.53.1+vite@3.2.4/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { join } from "node:path";
var __vite_injected_original_dirname = "/home/fractal-tess/dev/Jet-Black/monorepo/apps/web";
var vite_config_default = defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $assets: join(__vite_injected_original_dirname, "src/assets"),
      $router: join(__vite_injected_original_dirname, "src/lib/router"),
      $layout: join(__vite_injected_original_dirname, "src/lib/layout"),
      $data: join(__vite_injected_original_dirname, "src/lib/data"),
      $styles: join(__vite_injected_original_dirname, "src/app.postcss"),
      $types: join(__vite_injected_original_dirname, "src/lib/types")
    }
  },
  server: {
    strictPort: true,
    port: 3001
  },
  envPrefix: ["VITE_"]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9mcmFjdGFsLXRlc3MvZGV2L0pldC1CbGFjay9tb25vcmVwby9hcHBzL3dlYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvZnJhY3RhbC10ZXNzL2Rldi9KZXQtQmxhY2svbW9ub3JlcG8vYXBwcy93ZWIvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvZnJhY3RhbC10ZXNzL2Rldi9KZXQtQmxhY2svbW9ub3JlcG8vYXBwcy93ZWIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJ1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ25vZGU6cGF0aCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3N2ZWx0ZWtpdCgpXSxcblxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICRhc3NldHM6IGpvaW4oX19kaXJuYW1lLCAnc3JjL2Fzc2V0cycpLFxuXG4gICAgICAkcm91dGVyOiBqb2luKF9fZGlybmFtZSwgJ3NyYy9saWIvcm91dGVyJyksXG5cbiAgICAgICRsYXlvdXQ6IGpvaW4oX19kaXJuYW1lLCAnc3JjL2xpYi9sYXlvdXQnKSxcblxuICAgICAgJGRhdGE6IGpvaW4oX19kaXJuYW1lLCAnc3JjL2xpYi9kYXRhJyksXG5cbiAgICAgICRzdHlsZXM6IGpvaW4oX19kaXJuYW1lLCAnc3JjL2FwcC5wb3N0Y3NzJyksXG5cbiAgICAgICR0eXBlczogam9pbihfX2Rpcm5hbWUsICdzcmMvbGliL3R5cGVzJylcbiAgICB9XG4gIH0sXG5cbiAgc2VydmVyOiB7XG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgICBwb3J0OiAzMDAxXG4gIH0sXG5cbiAgZW52UHJlZml4OiBbJ1ZJVEVfJ11cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdVLFNBQVMsb0JBQW9CO0FBQ3JXLFNBQVMsaUJBQWlCO0FBQzFCLFNBQVMsWUFBWTtBQUZyQixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsVUFBVSxDQUFDO0FBQUEsRUFFckIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsU0FBUyxLQUFLLGtDQUFXLFlBQVk7QUFBQSxNQUVyQyxTQUFTLEtBQUssa0NBQVcsZ0JBQWdCO0FBQUEsTUFFekMsU0FBUyxLQUFLLGtDQUFXLGdCQUFnQjtBQUFBLE1BRXpDLE9BQU8sS0FBSyxrQ0FBVyxjQUFjO0FBQUEsTUFFckMsU0FBUyxLQUFLLGtDQUFXLGlCQUFpQjtBQUFBLE1BRTFDLFFBQVEsS0FBSyxrQ0FBVyxlQUFlO0FBQUEsSUFDekM7QUFBQSxFQUNGO0FBQUEsRUFFQSxRQUFRO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBRUEsV0FBVyxDQUFDLE9BQU87QUFDckIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
