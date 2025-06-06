import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Navigate, Outlet } from 'react-router-dom';
export default function ProtectedRoute() {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getSession = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                console.error('Error getting session:', error);
            }
            else {
                setSession(data.session);
            }
            setLoading(false);
        };
        getSession();
        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, []);
    if (loading) {
        return _jsx("div", { children: "Chargement..." }); // Ou un spinner de chargement
    }
    return session ? _jsx(Outlet, {}) : _jsx(Navigate, { to: "/auth", replace: true });
}
