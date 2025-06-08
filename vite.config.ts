import { defineConfig } from 'vite' 
import react from '@vitejs/plugin-react' 
import path from 'path' 

export default defineConfig({ 
  // keep looking inside /client 
  root: 'client', 

  // ensure HTML imports resolve relative to client/ 
  base: '/', 

  plugins: [react()], 

  resolve: { 
    alias: { 
      '@': path.resolve(__dirname, 'client/src'), 
      '@server': path.resolve(__dirname, 'server'), 
      '@shared': path.resolve(__dirname, 'shared'), 
    }, 
  }, 

  publicDir: path.resolve(__dirname, 'public'), 

  build: { 
    outDir: path.resolve(__dirname, 'dist/client'), 
    emptyOutDir: true, 

    // explicitly feed Rollup the real HTML path 
    rollupOptions: { 
      input: path.resolve(__dirname, 'client/index.html'),
      external: ['/src/main.tsx']
    }, 
  }, 
})