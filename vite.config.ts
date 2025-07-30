import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/akinola-bright-portfolio/',
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})