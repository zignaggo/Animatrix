import { SelectProfile } from '@/components/pages/auth/profile/select-profile'
import { getProfiles } from '@/utils'
import { cookies } from 'next/headers'

export async function Profiles({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const profiles = await getProfiles()
    const cookie = cookies()
    const profile = cookie.get('profile')
    return !profile?.value ? <SelectProfile profiles={profiles} /> : <>{children}</>
}
