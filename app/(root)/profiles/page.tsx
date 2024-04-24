import { getProfiles } from '@/components/pages/profiles/getProfiles'
import { createClient } from '@/supabase/server'

export default async function Profiles() {
    const supabase = createClient()
    const response = await getProfiles(supabase)
    return response.map((profile) => <div key={profile.id}>{profile.name}</div>)
}
