import { TProfile } from '@/lib/supabase/types'
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function getSelectedProfile() {
    const cookieStore = cookies()
    const cookie = cookieStore.get('profile')
    if (!cookie){
        redirect('/auth/sign')
    }
    const profile = JSON.parse(cookie.value) as TProfile
    return profile
}
