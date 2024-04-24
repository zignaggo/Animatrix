import { SelectProfile } from '@/components/pages/profiles/select-profile'
import { cookies } from 'next/headers'
import { getProfiles } from './getProfiles'
import { createClient } from '@/supabase/server'

export async function Profiles({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const supabase = createClient()
    const profiles = await getProfiles(supabase)
    const cookie = cookies()
    const profile = cookie.get('profile')
    return !profile?.value ? <SelectProfile profiles={profiles} /> : <>{children}</>
}
