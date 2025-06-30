import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),tsconfigPaths()],
  server: {
    proxy: {      
      '/backend': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    }
  }
})
