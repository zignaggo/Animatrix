import { SupabaseClient } from '@supabase/supabase-js'
export async function getProfiles(supabase: SupabaseClient) {
    const {
        data: { user },
    } = await supabase.auth.getUser()
    if (!user) return []
    const countriesWithCitiesQuery = supabase
        .from('profile')
        .select(
            `
  id,
  name,
  language
`
        )
        .filter('userID', 'eq', user.id)
    const { data, error } = await countriesWithCitiesQuery
    if (error) throw error
    return data
}
