import { getProfiles } from '@/components/pages/profiles/mutations/server'
import { SelectProfile } from '@/components/pages/profiles/choose-profile/select-profile'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function ChooseProfile() {
    const client = createClient()
    const { data } = await client.auth.getUser()
    if (!data.user) {
        return redirect('/auth/sign')
    }
    const profiles = await getProfiles()
    return <SelectProfile profiles={profiles} />
}
