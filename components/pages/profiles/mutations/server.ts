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
        .select(`id, name, language, avatar ( url )`)
        .filter('user_id', 'eq', user.id)
    const { data, error } = await profiles
    if (error) throw error
    return data as unknown as TProfile[]
}

export async function getProfile(id: number) {
    const supabase = createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()
    if (!user) return []
    const profiles = supabase
        .from('profile')
        .select(`id, name, language, avatar ( id, url )`)
        .filter('id', 'eq', id)
    const { data, error } = await profiles
    if (error) throw error
    return data as unknown as TProfile[]
}

export async function getAvatars() {
    const supabase = createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()
    if (!user) return []
    const avatars = supabase
        .from('avatar')
        .select('id, url')
        .or(`user_id.eq.${user.id},user_id.is.null`)
    const { data, error } = await avatars
    if (error) throw error
    return data as TAvatar[]
}
