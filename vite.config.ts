import { defineConfig } from 'vite' 
import react from '@vitejs/plugin-react' 
import path from 'path' 

export default defineConfig({ 
  // point all file lookups at /client 
  root: 'client', 

  // emit URLs relative to the build output (so ./src/main.tsx works) 
  base: './', 

  plugins: [react()], 

  resolve: { 
    alias: { 
      '@': path.resolve(__dirname, 'client/src'), 
      '@server': path.resolve(__dirname, 'server'), 
      '@shared': path.resolve(__dirname, 'shared'), 
    }, 
  }, 

  // serve static assets from repo-root/public 
  publicDir: path.resolve(__dirname, 'public'), 

  build: { 
    // output to repo-root/dist/client 
    outDir: path.resolve(__dirname, 'dist/client'), 
    emptyOutDir: true, 
  }, 
})