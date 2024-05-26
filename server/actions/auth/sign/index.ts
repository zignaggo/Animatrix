'use server'
import { action } from '@/server/safeactions'
import { signSchema } from './schema'
import { createClient } from '@/lib/supabase/server'
import { AuthApiError } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

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

export const signWithGoogle = async () => {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:4000/api/auth/callback',
        },
    })
    if (data.url) {
        redirect(data.url)
    }
    if (error) {
        throw new AuthApiError(error.message, error.status!, error.code)
    }
}

export const signOut = async () => {
    const client = createClient()
    const cookie = cookies()
    cookie.delete('profile')
    await client.auth.signOut()
    revalidatePath('/auth/sign')
    redirect('/auth/sign')
}
