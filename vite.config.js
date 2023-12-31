import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' // used to import svgs as components

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  assetsInclude: ["**/*.glb"],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',

  },
})
