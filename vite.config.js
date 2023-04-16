import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-app-0.1/',
  build: {
    assetsDir: '',
    outDir: 'dist',
    publicPath: '/my-app-0.1/',
  },
})
