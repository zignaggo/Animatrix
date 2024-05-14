import { envServerSchema } from '@/types/serverEnvSchema'
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    envServerSchema.SUPABASE_URL,
    envServerSchema.SUPABASE_ANON_KEY
  )
}