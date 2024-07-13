export const Languages = {
    Portuguese: 'pt-br',
    English: 'en',
} as const
export type ValueOf<T> = T[keyof T]
export type TProfile = {
    id: number
    name: string
    language: ValueOf<typeof Languages>
    avatar_url?: string
}

export type TAvatar = {
    id: number;
    url: string
    user_id?: string | null
}
