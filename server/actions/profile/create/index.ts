'use server'
import { action } from '@/server/safeactions'
import { createClient } from '@/supabase/server'
import { AuthApiError } from '@supabase/supabase-js'
import { createProfileSchema } from './schema'
import { revalidatePath } from 'next/cache'
export const createProfileSafer = action(createProfileSchema, async (data) => {
    const supabase = createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
        throw new Error('Can get current user')
    }
    const response = await supabase
        .from('profile')
        .insert({ ...data, userID: user.id })
    if (response.error) {
        throw new AuthApiError(
            response.error.message,
            response.status,
            response.error.code
        )
    }
    revalidatePath('/choose-profile', 'page')
    return response.data
})
