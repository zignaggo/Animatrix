'use server'
import { action } from '@/server/safeactions'
import { googleSignSchema, signSchema } from './schema'
import { createClient } from '@/lib/supabase/server'
import { AuthApiError } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies, headers } from 'next/headers'
import { envServerSchema } from '@/types/serverEnvSchema'

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
export const signWithGoogleSafer = action(googleSignSchema, async () => {
    const supabase = createClient()
    const headersList = headers()
    const host = headersList.get('host')
    const protocol = envServerSchema.PRODUCTION === 'true'? 'https' : 'http'
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: `${protocol}://${host}/api/auth/callback`,
        },
    })
    if (data.url) {
        redirect(data.url)
    }
})

export const signOut = async () => {
    const client = createClient()
    const cookie = cookies()
    cookie.delete('profile')
    await client.auth.signOut()
    revalidatePath('/auth/sign')
    redirect('/auth/sign')
}
