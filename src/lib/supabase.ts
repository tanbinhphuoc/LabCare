import { createClient } from '@supabase/supabase-js';

// Check if Supabase is properly configured
const isSupabaseConfigured = () => {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  return (
    url && key && !url.includes('placeholder') && !key.includes('placeholder')
  );
};

// Create a safe Supabase client
let supabaseClient: ReturnType<typeof createClient> | null = null;

if (isSupabaseConfigured()) {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // Create a mock client for development/demo purposes
  supabaseClient = {
    from: () => ({
      select: () => ({
        eq: () => ({
          maybeSingle: () => Promise.resolve({ data: null, error: null }),
          order: () => Promise.resolve({ data: [], error: null }),
        }),
        order: () => Promise.resolve({ data: [], error: null }),
      }),
    }),
  } as ReturnType<typeof createClient>;

  if (import.meta.env.DEV) {
    console.warn(
      'Supabase not configured. Using mock client for demo purposes.',
    );
  }
}

export const supabase = supabaseClient;
