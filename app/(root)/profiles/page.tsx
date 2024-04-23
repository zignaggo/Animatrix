import { getProfiles } from '@/components/pages/profiles/getAvatars'
import { createClient } from '@/supabase/server'

export default async function Profiles() {
    const supabase = createClient()
    const user = await supabase.auth.getUser()
    if (user.error) {
        return <></>
    }
    console.log(user.data.user.id)
    const response = await getProfiles(user.data.user.id, supabase)
    console.log(response)
    return response.map((profile) => <div key={profile.id}>{profile.name}</div>)
}
