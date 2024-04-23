import { SupabaseClient } from '@supabase/supabase-js'
export async function getProfiles(userID: string, supabase: SupabaseClient) {
    const countriesWithCitiesQuery = supabase
        .from('profile')
        .select(
            `
  id,
  name,
  language
`
        )
        .filter('userID', 'eq', userID)
    const { data, error } = await countriesWithCitiesQuery
    if (error) throw error
    return data
}
