import { createClient } from '@/lib/supabase/server'
import { TProfile } from '@/lib/supabase/profile'
export async function getProfiles() {
    const supabase = createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()
    if (!user) return []
    const profiles = supabase
        .from('profile')
        .select(`id, name, language, avatar_url`)
        .filter('user_id', 'eq', user.id)
    const { data, error } = await profiles
    if (error) throw error
    return data as TProfile[]
}
