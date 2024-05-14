import { envServerSchema } from '@/types/serverEnvSchema'
import { createServerClient, CookieOptions, CookieMethods } from '@supabase/ssr'
import { cookies as nextCookies } from 'next/headers'

export function createClient() {
    const cookieStore = nextCookies()
    const secureOptions = { httpOnly: true, secure: true }
    const cookies: CookieMethods = {
        get(name: string) {
            return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
            try {
                cookieStore.set({
                    name,
                    value,
                    ...options,
                    ...secureOptions,
                })
            } catch (error) {}
        },
        remove(name: string, options: CookieOptions) {
            try {
                cookieStore.set({
                    name,
                    value: '',
                    ...options,
                    ...secureOptions,
                })
            } catch (error) {}
        },
    }
    return createServerClient(
        envServerSchema.SUPABASE_URL,
        envServerSchema.SUPABASE_ANON_KEY,
        {
            cookies,
        }
    )
}
