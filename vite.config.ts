import { defineConfig } from 'vite' 
 import react from '@vitejs/plugin-react' 
 import path from 'path' 
 
 export default defineConfig({ 
   // point Vite at the client folder 
   root: path.resolve(__dirname, 'client'), 
 
   plugins: [react()], 
 
   resolve: { 
     alias: { 
       // @ always references client/src 
       '@': path.resolve(__dirname, 'client/src'), 
       '@server': path.resolve(__dirname, 'server'), 
       '@shared': path.resolve(__dirname, 'shared'), 
     }, 
   }, 
 
   // serve static assets from repo-root/public 
   publicDir: path.resolve(__dirname, 'public'), 
 
   build: { 
     // emit files into repo-root/dist/client 
     outDir: path.resolve(__dirname, 'dist/client'), 
     emptyOutDir: true, 
     rollupOptions: { 
       input: path.resolve(__dirname, 'client/index.html'), 
     }, 
   }, 
 })