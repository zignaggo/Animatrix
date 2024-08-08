import { TProfile } from '@/lib/supabase/types'
import { atom } from 'jotai'
interface ProfileStore {
    currentProfile: TProfile | null
    profiles: TProfile[]
}
export const profileAtom = atom<ProfileStore>({
    currentProfile: null,
    profiles: [],
})
