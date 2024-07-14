'use server'
import { action } from '@/server/safeactions'
import { createClient } from '@/lib/supabase/server'
import { AuthApiError } from '@supabase/supabase-js'
import { deleteProfileSchema } from './schema'
import { revalidatePath } from 'next/cache'
export const deleteProfileSafer = action(deleteProfileSchema, async (data) => {
    const supabase = createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
        throw new Error('Can get current user')
    }
    const response = await supabase
        .from('profile')
        .delete()
        .eq('id', data.id)
    if (response.error) {
        throw new AuthApiError(
            response.error.message,
            response.status,
            response.error.code
        )
    }
    revalidatePath('/update-profile', 'page')
    return response.data
})
