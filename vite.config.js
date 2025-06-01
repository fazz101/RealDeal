import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          return assetInfo.name
        },
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name
        },
        chunkFileNames: (chunkInfo) => {
          return chunkInfo.name
        }
      }
    }
  }
})