import { defineConfig } from 'vite' 
 import react from '@vitejs/plugin-react' 
 import path from 'path' 
 
 export default defineConfig({ 
   // project root is client/ 
   root: '.', 
   plugins: [react()], 
   resolve: { 
     alias: { 
       // @ maps to client/src 
       '@': path.resolve(__dirname, 'src'), 
       // if you still need server/shared aliases: 
       '@server': path.resolve(__dirname, '../server'), 
       '@shared': path.resolve(__dirname, '../shared'), 
     }, 
   }, 
   // static assets live at repo-root/public 
   publicDir: path.resolve(__dirname, '../public'), 
   build: { 
     // emit into repo-root/dist/client 
     outDir: path.resolve(__dirname, '../dist/client'), 
     emptyOutDir: true, 
     rollupOptions: { 
       // point Rollup at this folder’s index.html 
       input: path.resolve(__dirname, 'index.html'), 
     }, 
   }, 
 })