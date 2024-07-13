import { TAvatar } from "@/lib/supabase/types"
import { atom } from "jotai"

export const selectedAvatar = atom<TAvatar | null>(null)