import { createClient } from '@/lib/supabase/server'
import { TAvatar, TProfile } from '@/lib/supabase/types'
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

export async function getAvatars(justUserAvatars = true) {
    const supabase = createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()
    if (!user) return []
    const profiles = supabase
        .from('avatar')
        .select(`id, url`)
        .filter('user_id', 'eq', justUserAvatars ? user.id : null)
    const { data, error } = await profiles
    if (error) throw error
    return data as TAvatar[]
}
