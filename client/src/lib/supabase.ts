import { createClient } from '@supabase/supabase-js';

console.log('import.meta.env:', import.meta.env);
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('supabaseUrl after fallback:', supabaseUrl);
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
console.log('VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY);
console.log('supabaseAnonKey after fallback:', supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);