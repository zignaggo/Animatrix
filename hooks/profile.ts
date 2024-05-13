import { cookies } from 'next/headers'

export const useProfile = () => {
    const cookie = cookies().get('profile')
    if (!cookie) return null
    return JSON.parse(cookie.value) as { name: string }
}
