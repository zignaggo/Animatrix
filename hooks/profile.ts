import { cookies } from 'next/headers'

export const useProfile = () => {
    const cookie = cookies().get('profile')
    return JSON.parse(cookie!.value) as { name: string }
}
