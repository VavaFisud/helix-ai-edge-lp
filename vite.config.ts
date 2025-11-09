import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Définit la racine de l'application cliente
  root: 'client',
  base: '/',

  plugins: [react()],

  resolve: {
    alias: {
      // Les alias doivent être résolus depuis la racine du projet, pas depuis 'client'
      '@': path.resolve(__dirname, 'client/src'),
      '@server': path.resolve(__dirname, 'server'),
      '@shared': path.resolve(__dirname, 'shared'),
    },
  },

  build: {
    // Spécifie le dossier de sortie par rapport à la racine du projet
    outDir: '../dist',
    emptyOutDir: true,
  },
});
