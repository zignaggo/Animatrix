'use server'
import { action } from '@/server/safeactions'
import { signSchema, socialAuthSchema } from './schema'
import { createClient } from '@/lib/supabase/server'
import { AuthApiError } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { getURL } from '@/utils'

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
export const signSocialAuthSafer = action(socialAuthSchema, async ({ provider }) => {
    const supabase = createClient()
    const host = getURL()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
            redirectTo: `${host}api/auth/callback`,
        },
    })
    if (data.url) {
        redirect(data.url)
    }
    if (error) {
        throw new AuthApiError(error.message, error.status!, error.code)
    }
})

export const signOut = async () => {
    const client = createClient()
    const { error } = await client.auth.signOut()
    if (!error) {
        const cookie = cookies()
        cookie.delete('profile')
        revalidatePath('/auth/sign')
        redirect('/auth/sign')
    }
}
