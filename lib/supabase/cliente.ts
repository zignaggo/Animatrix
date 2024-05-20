import { envClientSchema } from '@/types/clientEnvSchema'
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    envClientSchema.NEXT_PUBLIC_SUPABASE_URL,
    envClientSchema.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}