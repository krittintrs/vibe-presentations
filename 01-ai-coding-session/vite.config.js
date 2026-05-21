import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  server: {
    fs: { allow: ['..'] }
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, '../asset')
    }
  }
})
