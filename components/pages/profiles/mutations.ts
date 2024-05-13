import { TProfile } from '@/types/profile'
import { SupabaseClient } from '@supabase/supabase-js'
export async function getProfiles(supabase: SupabaseClient) {
    const {
        data: { user },
    } = await supabase.auth.getUser()
    if (!user) return []
    const profiles = supabase
        .from('profile')
        .select(
            `
  id,
  name,
  language
`
        )
        .filter('userID', 'eq', user.id)
    const { data, error } = await profiles
    if (error) throw error
    return data as TProfile[]
}
