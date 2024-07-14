import { TAvatar } from '@/lib/supabase/types'

export async function getClientAvatars(all?: boolean) {
    const baseUrl = '/api/user/avatars'
    const url = all ? baseUrl + '?all=true' : baseUrl
    const response = await fetch(url)
    const data: TAvatar[] = await response.json()
    return data
}
