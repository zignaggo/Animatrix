'use server'
import { action } from '@/server/safeactions'
import { signSchema } from './schema'
import { createClient } from '@/supabase/server'
import { AuthApiError } from '@supabase/supabase-js'

export const signInSafer = action(signSchema, async ({ email, password }) => {
    const supabase = createClient()
    const response = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    if (response.error) {
        throw new AuthApiError(
            response.error.message,
            response.error.status!,
            response.error.code
        )
    }
})
