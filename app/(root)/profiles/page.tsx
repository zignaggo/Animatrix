import { getProfiles } from '@/components/pages/profiles/getAvatars'
import { createClient } from '@/supabase/server'

export default async function Profiles() {
    const supabase = createClient()
    const user = await supabase.auth.getUser()
    if (user.error) {
        return <></>
    }
    const response = await getProfiles(user.data.user.id, supabase)
    return response.map((profile) => <div key={profile.id}>{profile.name}</div>)
}
