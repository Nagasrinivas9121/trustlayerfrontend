import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // Optimization: Ensures clean builds and asset organization
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Splits vendor libraries like Framer Motion and Lucide into a separate file for faster loading
          vendor: ['react', 'react-dom', 'framer-motion', 'lucide-react', 'react-router-dom'],
        },
      },
    },
  },
})