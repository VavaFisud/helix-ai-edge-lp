import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: __dirname, // Set the project root to the 'client' directory
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@server': path.resolve(__dirname, '..', 'server'),
      '@shared': path.resolve(__dirname, '..', 'shared'),
    },
  },
  publicDir: path.resolve(__dirname, '..', 'public'),
  build: {
    outDir: path.resolve(__dirname, '..', 'dist', 'client'),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // Explicitly set index.html as input
    },
  },
});