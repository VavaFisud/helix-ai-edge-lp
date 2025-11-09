import { Session } from '@supabase/supabase-js';
export declare const useAuth: () => {
    session: Session | null;
    loading: boolean;
    isAuthenticated: boolean;
    user: import("@supabase/auth-js").User | null;
};
