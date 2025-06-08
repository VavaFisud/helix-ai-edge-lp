import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Gestionnaire d'erreurs global
window.onerror = function(message, source, lineno, colno, error) {
  console.error('Erreur globale :', { message, source, lineno, colno, error });
  // Afficher une erreur visible pour l'utilisateur
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; color: red;">
        <h2>Une erreur est survenue</h2>
        <pre>${message}</pre>
        <p>Consultez la console pour plus de détails.</p>
      </div>
    `;
  }
  return false;
};

const root = document.getElementById('root');

if (!root) {
  throw new Error('Element root non trouvé dans le DOM');
}

try {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} catch (error) {
  console.error('Erreur lors du rendu de l\'application:', error);
  root.innerHTML = `
    <div style="padding: 20px; color: red;">
      <h2>Erreur de rendu</h2>
      <pre>${error instanceof Error ? error.message : 'Erreur inconnue'}</pre>
    </div>
  `;
}
