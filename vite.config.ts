import { defineConfig } from 'vite' 
import react from '@vitejs/plugin-react' 
import path from 'path' 

export default defineConfig({ 
  base: '/', 

  plugins: [react()], 

  resolve: { 
    alias: { 
      '@': path.resolve(__dirname, 'client/src'), 
      '@server': path.resolve(__dirname, 'server'), 
      '@shared': path.resolve(__dirname, 'shared'), 
    }, 
  }, 

  publicDir: 'public', 

  build: { 
    outDir: 'dist', 
    emptyOutDir: true, 
    rollupOptions: {
      input: 'client/index.html'
    }, 
  }, 
})