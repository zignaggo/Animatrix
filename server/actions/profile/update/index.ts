'use server'
import { action } from '@/server/safeactions'
import { createClient } from '@/lib/supabase/server'
import { AuthApiError } from '@supabase/supabase-js'
import { updateProfileSchema } from './schema'
import { revalidatePath } from 'next/cache'
export const updateProfileSafer = action(updateProfileSchema, async (data) => {
    console.log('wtf')
    const { id, ...values } = data
    const supabase = createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
        throw new Error('Can get current user')
    }
    const response = await supabase
        .from('profile')
        .update(values)
        .eq('id', id)
    console.log(response);
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
