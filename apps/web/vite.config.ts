import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { join } from 'node:path'

export default defineConfig({
  plugins: [sveltekit()],

  resolve: {
    alias: {
      $assets: join(__dirname, 'src/assets'),

      $router: join(__dirname, 'src/lib/router'),

      $layout: join(__dirname, 'src/lib/layout'),

      $data: join(__dirname, 'src/lib/data'),

      $styles: join(__dirname, 'src/app.postcss'),

      $types: join(__dirname, 'src/lib/types')
    }
  },

  server: {
    strictPort: true,
    port: 3001
  },

  envPrefix: ['VITE_']
})
