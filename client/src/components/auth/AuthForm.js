import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
export default function AuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(true);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const navigate = useNavigate();
    const handleAuth = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            let error = null;
            if (isSignUp) {
                const { error: signUpError } = await supabase.auth.signUp({
                    email,
                    password,
                });
                error = signUpError;
            }
            else {
                const { error: signInError } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });
                error = signInError;
            }
            if (error)
                throw error;
            toast({
                title: isSignUp ? 'Inscription réussie!' : 'Connexion réussie!',
                description: isSignUp ? 'Veuillez vérifier votre email pour confirmer votre compte.' : 'Redirection vers le dashboard...',
            });
            if (!isSignUp) {
                navigate('/dashboard');
            }
        }
        catch (error) {
            // toast({
            //   title: 'Erreur d'authentification',
            //   description: 'Une erreur est survenue.'
            // });
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx("div", { className: "flex flex-col items-center justify-center min-h-screen bg-gray-100", children: _jsxs("div", { className: "w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md", children: [_jsx("h2", { className: "text-2xl font-bold text-center", children: isSignUp ? 'Créer un compte' : 'Se connecter' }), _jsxs("form", { onSubmit: handleAuth, className: "space-y-6", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "email", children: "Email" }), _jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, placeholder: "votre@email.com" })] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "password", children: "Mot de passe" }), _jsx(Input, { id: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true, placeholder: "********" })] }), _jsx(Button, { type: "submit", className: "w-full", disabled: loading, children: loading ? 'Chargement...' : isSignUp ? 'S\'inscrire' : 'Se connecter' })] }), _jsxs("p", { className: "text-sm text-center", children: [isSignUp ? 'Déjà un compte?' : 'Pas encore de compte?', ' ', _jsx("button", { onClick: () => setIsSignUp(!isSignUp), className: "font-medium text-indigo-600 hover:text-indigo-500", children: isSignUp ? 'Se connecter' : 'S\'inscrire' })] })] }) }));
}
