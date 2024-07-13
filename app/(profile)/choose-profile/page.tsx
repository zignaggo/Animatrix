import { getProfiles } from '@/components/pages/profiles/mutations'
import { SelectProfile } from '@/components/pages/profiles/choose-profile/select-profile'
import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function ChooseProfile() {
    const client = createClient()
    const cookieStore = cookies()
    const { data } = await client.auth.getUser()
    const profile = cookieStore.get('profile')
    if (!data.user) {
        return redirect('/auth/sign')
    }
    if (profile) {
        return redirect('/animes')
    }
    const profiles = await getProfiles()
    return <SelectProfile profiles={profiles} />
}
