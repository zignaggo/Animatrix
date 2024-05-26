'use server'
import { action } from '@/server/safeactions'
import { signSchema } from './schema'
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
export const signWithGoogleSafer = async () => {
    const supabase = createClient()
    const host = getURL()
    const { data } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${host}api/auth/callback`,
        },
    })
    if (data.url) {
        redirect(data.url)
    }
}

export const signOut = async () => {
    const client = createClient()
    const cookie = cookies()
    cookie.delete('profile')
    const { error } = await client.auth.signOut()
    if (!error) {
        revalidatePath('/auth/sign')
        redirect('/auth/sign')
    }
}
