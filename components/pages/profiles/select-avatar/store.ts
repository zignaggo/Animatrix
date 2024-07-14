import { TAvatar } from "@/lib/supabase/types"
import { atom } from "jotai"

export const selectedAvatarModalStore = atom<TAvatar | null>(null)
export const avatarProfileStore = atom<TAvatar | null>(null)