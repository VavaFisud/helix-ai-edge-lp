import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Navigate, Outlet } from 'react-router-dom';
import { Session } from '@supabase/supabase-js';

export default function AdminProtectedRoute() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error getting session:', error);
      } else {
        setSession(data.session);
        // Debug: afficher les métadonnées utilisateur
        console.log('AdminProtectedRoute - User metadata:', data.session?.user?.user_metadata);
        console.log('AdminProtectedRoute - User role:', data.session?.user?.user_metadata?.role);
        
        // Vérifier si l'utilisateur a le rôle admin
        const userRole = data.session?.user?.user_metadata?.role;
        const isAdminUser = userRole === 'admin';
        
        setIsAdmin(isAdminUser);
        
        console.log('AdminProtectedRoute - Is admin:', isAdminUser);
      }
      setLoading(false);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        // Debug: afficher les métadonnées utilisateur
        console.log('AdminProtectedRoute - Auth change - User metadata:', session?.user?.user_metadata);
        
        // Vérifier le rôle admin lors du changement de session
        const userRole = session?.user?.user_metadata?.role;
        const isAdminUser = userRole === 'admin';
        
        setIsAdmin(isAdminUser);
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Vérification des permissions...</div>
      </div>
    );
  }

  // Si pas de session, rediriger vers l'authentification
  if (!session) {
    return <Navigate to="/auth" replace />;
  }

  // Si pas admin, rediriger vers le dashboard avec un message d'erreur
  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Accès refusé</h2>
          <p className="text-gray-600 mb-4">Vous n'avez pas les permissions nécessaires pour accéder à cette page.</p>
          <p className="text-sm text-gray-500">Seuls les comptes administrateurs peuvent accéder au panel admin.</p>
          <button 
            onClick={() => window.history.back()} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retour
          </button>
        </div>
      </div>
    );
  }

  return <Outlet />;
}