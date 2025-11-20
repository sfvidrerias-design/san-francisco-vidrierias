import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://AQUI_VA_TU_URL.supabase.co'  // ← después lo cambias
const supabaseAnonKey = 'AQUI_VA_TU_ANON_KEY'          // ← después lo cambias

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
