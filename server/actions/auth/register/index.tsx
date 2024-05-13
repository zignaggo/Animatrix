'use server'
import { createClient } from '@/supabase/server'
import { registerSchema } from './schema'
import { action } from '@/server/safeactions'
import { AuthApiError } from '@supabase/supabase-js'

export const createSafeUser = action(
    registerSchema,
    async ({ email, password, username }) => {
        const supabase = createClient()
        const response = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username,
                },
            },
        })
        if (response.error) {
            throw new AuthApiError(
                response.error.message,
                response.error.status!,
                response.error.code
            )
        }
    }
)
