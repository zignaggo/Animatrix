import { createClient } from '@/supabase/server';
import { TProfile } from '@/types/profile'
export async function getProfiles() {
    const supabase = createClient();
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
