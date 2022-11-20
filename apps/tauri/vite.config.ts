import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { join } from 'node:path'

export default defineConfig({
  plugins: [svelte()],

  resolve: {
    alias: {
      $lib: join(__dirname, 'src/lib'),

      $assets: join(__dirname, 'src/assets'),

      $router: join(__dirname, 'src/lib/router'),

      $layout: join(__dirname, 'src/lib/layout'),

      $data: join(__dirname, 'src/lib/data'),

      $styles: join(__dirname, 'src/styles/app.postcss'),

      $types: join(__dirname, 'src/lib/types')
    }
  },

  publicDir: false,

  clearScreen: false,

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  // prevent vite from obscuring rust errors
  // tauri expects a fixed port, fail if that port is not available
  server: {
    strictPort: true,
    port: 3000
  },

  // to make use of `TAURI_DEBUG` and other env variables
  envPrefix: ['VITE_', 'TAURI_'],

  build: {
    emptyOutDir: true,
    // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
    // Tauri supports es2021
    target: ['es2021', 'chrome100', 'safari13'],
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG
  }
})
