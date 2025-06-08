import { defineConfig } from 'vite' 
import react from '@vitejs/plugin-react' 
import path from 'path' 

export default defineConfig({ 
  // now that this lives in client/, "." is your source root 
  root: '.', 
  // build output will be relative URLs 
  base: '/', 

  plugins: [react()], 

  resolve: { 
    alias: { 
      // @ → client/src 
      '@': path.resolve(__dirname, 'src'), 
      // server and shared still one level up 
      '@server': path.resolve(__dirname, '../server'), 
      '@shared': path.resolve(__dirname, '../shared'), 
    }, 
  }, 

  // serve public/ at repo-root/public 
  publicDir: path.resolve(__dirname, '../public'), 

  build: { 
    // dump into repo-root/dist/client 
    outDir: path.resolve(__dirname, '../dist/client'), 
    emptyOutDir: true, 
    rollupOptions: { 
      // explicitly point at the local index.html 
      input: path.resolve(__dirname, 'index.html'), 
    }, 
  }, 
})